import { updatePackage } from "../src/komac.ts";

export default async function () {
  const versionInfo = await fetch("https://nginx.org/").then((res) =>
    res.text()
  );

  // @ts-ignore .
  const version = versionInfo.match(
    /nginx[._-]v?(\d+(?:\.\d+)+)<\/a>[\s\S]*?mainline version/i,
  )[1];
  const urls = [`https://nginx.org/download/nginx-${version}.zip`];

  await updatePackage(
    "nginxinc.nginx",
    version,
    urls,
    "--release-notes-url",
    "https://nginx.org/en/CHANGES",
  );
}
