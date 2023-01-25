import type { NextApiRequest, NextApiResponse } from "next";

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

async function waitlistHandler(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);
  const email = validateEmail(body, res);
  await saveEmail(email);
  res.status(200).send("Email saved");
}

async function saveEmail(email: string) {
  // TODO: Save email to database or something
  console.log("Got email: " + email);
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
