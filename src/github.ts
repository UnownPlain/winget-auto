import { Octokit } from 'npm:octokit';
import { extname } from 'jsr:@std/path';

const octokit = new Octokit({ auth: Deno.env.get('GITHUB_TOKEN') });
await octokit.rest.users.getAuthenticated();

async function getLatestReleaseData(owner: string, repo: string) {
	const release = await octokit.rest.repos.getLatestRelease({
		owner,
		repo,
	});

	return release;
}

export async function getLatestRelease(owner: string, repo: string) {
	const release = await getLatestReleaseData(owner, repo);

	return release.data.tag_name.replace(/^v/, '');
}

export async function getLatestUrls(owner: string, repo: string) {
	const release = (await getLatestReleaseData(owner, repo)).data.assets;
	const urls = [];
	for (const asset of release) {
		if (['.exe', '.msi', '.msix', '.appx'].includes(extname(asset.name))) {
			urls.push(asset.browser_download_url);
		}
	}
	return urls;
}

export async function getTagHash(owner: string, repo: string) {
	const release = await octokit.rest.repos.listTags({
		owner,
		repo,
	});
	return release.data[0].commit.sha;
}
