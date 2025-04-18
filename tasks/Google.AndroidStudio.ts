import { updatePackage } from "../src/komac.ts";

export default async function () {
  const versionInfo = await fetch("https://developer.android.com/studio/").then(
    (res) => res.text(),
  );

  // @ts-ignore .
  const version = versionInfo.match(
    /android-studio-(\d+\.\d+\.\d+\.\d+)-windows\.exe/i,
  )[1];
  const urls = [
    `https://redirector.gvt1.com/edgedl/android/studio/install/${version}/android-studio-${version}-windows.exe`,
  ];

  await updatePackage("Google.AndroidStudio", version, urls);
}
