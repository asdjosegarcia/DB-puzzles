/*
  Warnings:

  - Added the required column `nickName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nickName" TEXT NOT NULL,
    "email" TEXT NOT NULL DEFAULT 'unknown',
    "points" INTEGER NOT NULL DEFAULT 0,
    "timePlayed" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "acountStatus" TEXT NOT NULL DEFAULT 'active',
    "chatStatus" TEXT NOT NULL DEFAULT 'active',
    "userStatus" TEXT NOT NULL DEFAULT 'online'
);
INSERT INTO "new_User" ("acountStatus", "chatStatus", "createdAt", "email", "id", "points", "timePlayed", "userStatus") SELECT "acountStatus", "chatStatus", "createdAt", "email", "id", "points", "timePlayed", "userStatus" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
