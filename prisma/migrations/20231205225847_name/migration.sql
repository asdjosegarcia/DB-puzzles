-- CreateTable
CREATE TABLE "JigsawScore" (
    "id" SERIAL NOT NULL,
    "map" INTEGER NOT NULL DEFAULT 0,
    "user" TEXT DEFAULT 'unknown',
    "userId" INTEGER NOT NULL DEFAULT 0,
    "score" INTEGER NOT NULL DEFAULT 0,
    "secondsPlayed" INTEGER NOT NULL DEFAULT 0,
    "movementsNumber" INTEGER NOT NULL DEFAULT 0,
    "mapWin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JigsawScore_pkey" PRIMARY KEY ("id")
);
