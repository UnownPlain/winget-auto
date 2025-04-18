import { updatePackage } from "../src/komac.ts";

export default async function () {
  const versionInfo = await fetch("https://plex.tv/pms/downloads/5.json").then(
    (res) => res.json(),
  );

  const version = versionInfo.computer.Windows.version.split("-")[0];
  const urls = [
    versionInfo.computer.Windows.releases[0].url,
    versionInfo.computer.Windows.releases[1].url,
  ];

  await updatePackage("Plex.PlexMediaServer", version, urls);
}
