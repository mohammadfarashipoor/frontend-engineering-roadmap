/**
 * Use Case: File Downloader
 *
 * Problem:
 * After a download finishes,
 * custom logic should execute.
 *
 * What You'll Learn:
 * - Completion callbacks
 * - Decoupling workflow from behavior
 */

function downloadFile(callback) {
  console.log("Downloading file...");

  console.log("Download completed.");

  callback();
}

function openFile() {
  console.log("Opening file...");
}

downloadFile(openFile);