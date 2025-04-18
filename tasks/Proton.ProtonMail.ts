import { updatePackage } from '../src/komac.ts';
import { validateString } from '../src/validate.ts';

export default async function () {
	const versionInfo = await fetch(
		'https://proton.me/download/mail/windows/version.json',
	).then((res) => res.json());

	const version = validateString(versionInfo.Releases[0].Version);
	const urls = [validateString(versionInfo.Releases[0].File[0].Url)];

	await updatePackage('Proton.ProtonMail', version, urls);
}
