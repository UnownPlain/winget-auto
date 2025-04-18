import { updatePackage } from "../src/komac.ts";

export default async function () {
  const versionInfo = await fetch(
    "https://launcher-files.modrinth.com/updates.json",
  ).then((res) => res.json());

  const version = versionInfo.version;
  const urls = [
    `https://launcher-files.modrinth.com/versions/${version}/windows/Modrinth%20App_${version}_x64-setup.exe`,
  ];

  await updatePackage("Modrinth.ModrinthApp", version, urls);
}
