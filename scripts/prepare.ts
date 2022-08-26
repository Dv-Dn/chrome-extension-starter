import chokidar from "chokidar";
import { isDev, r } from "./utils";
import { execSync } from "child_process";

function writeManifest() {
  execSync("pnpm esno ./scripts/writeManifest.ts", { stdio: "inherit" });
}

writeManifest();

if (isDev) {
  chokidar.watch(r("src/manifest.ts")).on("change", () => {
    writeManifest();
  });
}
