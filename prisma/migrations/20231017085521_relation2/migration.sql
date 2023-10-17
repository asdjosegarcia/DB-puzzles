-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "points" INTEGER NOT NULL DEFAULT 0,
    "timePlayed" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL DEFAULT 'unknown',
    "acountStatus" TEXT NOT NULL DEFAULT 'active',
    "userStatus" TEXT NOT NULL DEFAULT 'online',
    "chatStatus" TEXT NOT NULL DEFAULT 'active'
);

-- CreateTable
CREATE TABLE "JigsawScore" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user" TEXT DEFAULT 'unknown',
    "userId" INTEGER NOT NULL DEFAULT 0,
    "score" INTEGER NOT NULL DEFAULT 0,
    "secondsPlayed" INTEGER NOT NULL DEFAULT 0,
    "movementsNumber" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "JigsawScore_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
