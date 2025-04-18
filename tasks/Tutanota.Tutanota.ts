import { updatePackage } from '../src/komac.ts';
import { ELECTRON_BUILDER_REGEX } from '../src/constants.ts';
import { validateMatch } from '../src/validate.ts';

export default async function () {
	const versionInfo = await fetch(
		'https://app.tuta.com/desktop/latest.yml',
	).then((res) => res.text());

	// @ts-ignore .
	const match = versionInfo.match(ELECTRON_BUILDER_REGEX);
	const version = validateMatch(match)[0];
	const urls = [
		`https://github.com/tutao/tutanota/releases/download/tutanota-desktop-release-${version}/tutanota-desktop-win.exe`,
	];

	await updatePackage('Tutanota.Tutanota', version, urls);
}
