import AdmZip from "adm-zip";

import { ensureDirSync } from "fs-extra";
import { log, r } from "./utils";

async function createZipArchive() {
  ensureDirSync("archives");

  const zip = new AdmZip();
  const outputFile = "archives/extension.zip";
  zip.addLocalFolder(r("dist"));
  zip.writeZip(outputFile);
  log("ZIP", `Created ${outputFile} successfully`);
}

createZipArchive();
