/**
 * Use Case: Folder Size
 *
 * Problem:
 * Calculate the total size of files
 * inside nested folders.
 *
 * What You'll Learn:
 * - Recursive aggregation
 * - Accumulating values
 */

const folder = {
  name: "Documents",
  files: [
    { name: "Resume.pdf", size: 200 },
    { name: "Notes.txt", size: 100 }
  ],
  folders: [
    {
      name: "Images",
      files: [
        { name: "Photo1.jpg", size: 500 },
        { name: "Photo2.jpg", size: 300 }
      ],
      folders: []
    },
    {
      name: "Videos",
      files: [
        { name: "Intro.mp4", size: 1000 }
      ],
      folders: []
    }
  ]
};

function calculateFolderSize(folder) {
  let total = 0;

  for (const file of folder.files) {
    total += file.size;
  }

  for (const childFolder of folder.folders) {
    total += calculateFolderSize(childFolder);
  }

  return total;
}

console.log(calculateFolderSize(folder));