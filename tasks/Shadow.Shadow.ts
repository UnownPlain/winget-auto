import { updatePackage } from '../src/komac.ts';
import { ELECTRON_BUILDER_REGEX } from '../src/constants.ts';
import { validateMatch } from '../src/validate.ts';

export default async function () {
	const versionInfo = await fetch(
		'https://update.shadow.tech/launcher/prod/win/x64/latest.yml',
	).then((res) => res.text());

	const match = versionInfo.match(ELECTRON_BUILDER_REGEX);

	const version = validateMatch(match)[0];
	const urls = [
		`https://update.shadow.tech/launcher/prod/win/x64/ShadowPCSetup-${version}.exe`,
	];

	await updatePackage('Shadow.Shadow', version, urls);
}
