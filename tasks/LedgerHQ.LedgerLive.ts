import { updatePackage } from '../src/komac.ts';
import { ELECTRON_BUILDER_REGEX } from '../src/constants.ts';
import { validateMatch } from '../src/validate.ts';

export default async function () {
	const versionInfo = await fetch(
		'https://download.live.ledger.com/latest.yml',
	).then((res) => res.text());

	const match = versionInfo.match(ELECTRON_BUILDER_REGEX);
	const version = validateMatch(match)[0];

	const urls = [
		`https://download.live.ledger.com/ledger-live-desktop-${version}-win-x64.exe`,
	];

	await updatePackage('LedgerHQ.LedgerLive', version, urls);
}
