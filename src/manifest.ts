import fs from "fs-extra";
import type PkgType from "../package.json";
import { r } from "../scripts/utils";

async function getManifest() {
  const pkg = (await fs.readJSON(r("package.json"))) as typeof PkgType;

  const manifest: chrome.runtime.ManifestV3 = {
    manifest_version: 3,
    name: pkg.displayName || pkg.name,
    version: pkg.version,
    description: pkg.description,

    options_ui: {
      page: "/src/view/options/index.html",
    },

    action: {
      default_popup: "/src/view/popup/index.html",
    },

    icons: {
      "128": "/src/assets/img/logo.png",
    },

    // content_scripts: [
    //   {
    //       matches: ["http://*/*", "https://*/*", "<all_urls>"],
    //     js: ["/src/content/index.ts"],
    //     css: ["/src/assets/styles/global.css"],
    //   },
    // ],

    // web_accessible_resources: [
    //   {
    //     resources: ["assets/js/*.js", "assets/css/*.css"],
    //     matches: ["*://*/*"],
    //   },
    // ],
  };

  return manifest;
}

export { getManifest };
