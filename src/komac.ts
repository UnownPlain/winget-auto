export async function komac(...args: string[]) {
  const command = new Deno.Command("komac", {
    args: args,
    stdin: "piped",
    stdout: "piped",
    stderr: "piped",
  }).spawn();

  const { code, stdout, stderr } = await command.output();
  console.log(new TextDecoder().decode(stdout));

  if (code !== 0) {
    throw new Error(new TextDecoder().decode(stderr));
  }

  console.log(`Process exited with code ${code}`);
}

export async function updatePackage(
  packageId: string,
  version: string,
  urls: string[],
  ...args: string[]
) {
  console.log(...urls);
  await komac("update", packageId, `-v`, version, `-u`, ...urls, "-s", ...args);
}
