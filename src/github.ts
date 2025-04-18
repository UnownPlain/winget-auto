import { Octokit } from "npm:octokit";

const octokit = new Octokit({ auth: Deno.env.get("GITHUB_TOKEN") });
await octokit.rest.users.getAuthenticated();

export async function getLatestRelease(owner: string, repo: string) {
  const release = await octokit.rest.repos.getLatestRelease({
    owner,
    repo,
  });

  return release.data.tag_name;
}
