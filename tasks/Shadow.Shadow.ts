import { updatePackage } from "../src/komac.ts";
import { ELECTRON_BUILDER_REGEX } from "../src/constants.ts";

export default async function () {
  const versionInfo = await fetch(
    "https://update.shadow.tech/launcher/prod/win/x64/latest.yml",
  ).then((res) => res.text());

  // @ts-ignore .
  const version = versionInfo.match(ELECTRON_BUILDER_REGEX)[0];
  const urls = [
    `https://update.shadow.tech/launcher/prod/win/x64/ShadowPCSetup-${version}.exe`,
  ];

  await updatePackage("Shadow.Shadow", version, urls);
}
