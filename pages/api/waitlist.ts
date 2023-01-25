import type { NextApiRequest, NextApiResponse } from "next";
import { EmbedBuilder, WebhookClient } from "discord.js";

require("dotenv").config();
const { DISCORD_WEBHOOK_URL } = process.env;

function validateEmail(body: any, res: NextApiResponse) {
  if (!body) {
    res.status(400).send("Malformed request");
  }

  const email = body["email"];
  if (!email) {
    res.status(400).send("Missing email");
  } else if (email.length > 300) {
    res.status(400).send("Email is too long");
  } else if (
    !email.match(
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    )
  ) {
    res.status(400).send("Invalid email");
  }

  return email;
}

async function saveEmail(email: string) {
  // Logs email to Discord channel via webhook
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
  res.status(200).send("Email saved");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await waitlistHandler(req, res);
  } else {
    res.status(404).json({ message: "Not found" });
  }
}
