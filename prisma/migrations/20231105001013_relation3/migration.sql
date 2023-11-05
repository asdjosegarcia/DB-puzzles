-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JigsawScore" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "map" INTEGER NOT NULL DEFAULT 0,
    "user" TEXT DEFAULT 'unknown',
    "userId" INTEGER NOT NULL DEFAULT 0,
    "score" INTEGER NOT NULL DEFAULT 0,
    "secondsPlayed" INTEGER NOT NULL DEFAULT 0,
    "movementsNumber" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "JigsawScore_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_JigsawScore" ("authorId", "createdAt", "id", "movementsNumber", "score", "secondsPlayed", "user", "userId") SELECT "authorId", "createdAt", "id", "movementsNumber", "score", "secondsPlayed", "user", "userId" FROM "JigsawScore";
DROP TABLE "JigsawScore";
ALTER TABLE "new_JigsawScore" RENAME TO "JigsawScore";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
