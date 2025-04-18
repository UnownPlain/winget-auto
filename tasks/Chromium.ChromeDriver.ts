import { updatePackage } from "../src/komac.ts";

export default async function () {
  const versionInfo = await fetch(
    "https://googlechromelabs.github.io/chrome-for-testing/last-known-good-versions.json",
  ).then((res) => res.json());

  const version = versionInfo.channels.Stable.version;
  const urls = [
    `https://storage.googleapis.com/chrome-for-testing-public/${version}/win64/chromedriver-win64.zip`,
    `https://storage.googleapis.com/chrome-for-testing-public/${version}/win32/chromedriver-win32.zip`,
  ];

  await updatePackage("Chromium.ChromeDriver", version, urls);
}
