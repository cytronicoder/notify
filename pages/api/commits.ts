import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/core";

// Fetch commits from the GitHub API on cytronicoder/notify
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  const { data } = await octokit.request("GET /repos/{owner}/{repo}/commits", {
    owner: "cytronicoder",
    repo: "notify",
  });

  res.status(200).json(data);
}
