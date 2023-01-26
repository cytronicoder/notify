import type { NextApiRequest, NextApiResponse } from "next";
require("dotenv").config();

function validateEmail(body: any, res: NextApiResponse) {
  if (!body) {
    res.status(400).send("Malformed request");
  }

  const email = body["email"];
  const { validate } = require("email-validator");

  if (!email) {
    res.status(400).send("Missing email");
  } else if (email.length > 300) {
    res.status(400).send("Email is too long");
  } else if (!validate(email)) {
    res.status(400).send("Invalid email");
  } else {
    return email;
  }
}

async function saveEmail(email: string) {
  // If no email is provided, this function will not be called
  if (!email) {
    return;
  }

  // Logs email to Google Sheets
  const { GoogleSpreadsheet } = require("google-spreadsheet");
  const {
    WAITLIST_SHEET_ID,
    GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY,
  } = process.env;

  const doc = new GoogleSpreadsheet(WAITLIST_SHEET_ID as string);

  await doc.useServiceAccountAuth({
    client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL as string,
    private_key: GOOGLE_PRIVATE_KEY as string,
  });

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];

  await sheet.addRow({
    email,
    timestamp: Math.floor(Date.now() / 1000), // Unix timestamp - easier to sort
  });

  // Logs email to Discord channel via webhook
  const { WebhookClient, EmbedBuilder } = require("discord.js");
  const { DISCORD_WEBHOOK_URL } = process.env;

  const webhookClient = new WebhookClient({
    url: DISCORD_WEBHOOK_URL as string,
  });

  const embed = new EmbedBuilder()
    .setTitle("New waitlist signup")
    .setDescription(email)
    .setColor(0xe75a70)
    .setTimestamp();

  webhookClient.send({
    embeds: [embed],
  });
}

async function waitlistHandler(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);
  const email = validateEmail(body, res);
  await saveEmail(email);

  // Set hasSubmitted cookie
  const { serialize } = require("cookie");
  const { NODE_ENV } = process.env;

  const cookie = serialize("hasSubmitted", "true", {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: "/",
    sameSite: "lax",
    secure: NODE_ENV === "production",
  });

  res.setHeader("Set-Cookie", cookie);
  res.status(200).send("Email saved!");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Check if user is on waitlist already via a hasSubmitted cookie
    const { parse } = require("cookie");
    const cookies = parse(req.headers.cookie || "");
    const hasSubmitted = cookies["hasSubmitted"];

    if (hasSubmitted) {
      res.status(400).send("You have already submitted your email!");
      return;
    }

    await waitlistHandler(req, res);
  } else {
    res.status(404).json({ message: "Not found!" });
  }
}
