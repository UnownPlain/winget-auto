import { updatePackage } from "../src/komac.ts";

export default async function () {
  const versionInfo = await fetch(
    "https://app.tuta.com/desktop/latest.yml",
  ).then((res) => res.text());

  // @ts-ignore .
  const version = versionInfo.match(/(?<=version:\s+).*$/m)[0];
  const urls = [
    `https://github.com/tutao/tutanota/releases/download/tutanota-desktop-release-${version}/tutanota-desktop-win.exe`,
  ];

  await updatePackage("Tutanota.Tutanota", version, urls);
}
