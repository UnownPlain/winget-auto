import { updatePackage } from "../src/komac.ts";
import { ELECTRON_BUILDER_REGEX } from "../src/constants.ts";

export default async function () {
  const versionInfo = await fetch(
    "https://download.live.ledger.com/latest.yml",
  ).then((res) => res.text());

  // @ts-ignore .
  const version = versionInfo.match(ELECTRON_BUILDER_REGEX)[0];
  const urls = [
    `https://download.live.ledger.com/ledger-live-desktop-${version}-win-x64.exe`,
  ];

  await updatePackage("LedgerHQ.LedgerLive", version, urls);
}
