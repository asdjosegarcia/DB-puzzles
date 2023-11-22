-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nickName" TEXT NOT NULL,
    "email" TEXT NOT NULL DEFAULT 'unknown',
    "points" INTEGER NOT NULL DEFAULT 0,
    "timePlayed" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "acountStatus" TEXT NOT NULL DEFAULT 'active',
    "chatStatus" TEXT NOT NULL DEFAULT 'active',
    "userStatus" TEXT NOT NULL DEFAULT 'online',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JigsawScore" (
    "id" SERIAL NOT NULL,
    "map" INTEGER NOT NULL DEFAULT 0,
    "user" TEXT DEFAULT 'unknown',
    "userId" INTEGER NOT NULL DEFAULT 0,
    "score" INTEGER NOT NULL DEFAULT 0,
    "secondsPlayed" INTEGER NOT NULL DEFAULT 0,
    "movementsNumber" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JigsawScore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
