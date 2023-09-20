/*
  Warnings:

  - You are about to drop the `anime` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "anime";

-- CreateTable
CREATE TABLE "Anime" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumb" TEXT NOT NULL,
    "episodes" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);
