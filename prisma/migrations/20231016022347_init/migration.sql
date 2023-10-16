-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JigsawScore" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user" TEXT,
    "score" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_JigsawScore" ("createdAt", "id", "user") SELECT "createdAt", "id", "user" FROM "JigsawScore";
DROP TABLE "JigsawScore";
ALTER TABLE "new_JigsawScore" RENAME TO "JigsawScore";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
