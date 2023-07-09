/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Secret` table. All the data in the column will be lost.
  - You are about to drop the column `viewed` on the `Secret` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Secret" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "body" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Secret" ("body", "createdAt", "id", "url") SELECT "body", "createdAt", "id", "url" FROM "Secret";
DROP TABLE "Secret";
ALTER TABLE "new_Secret" RENAME TO "Secret";
CREATE UNIQUE INDEX "Secret_url_key" ON "Secret"("url");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
