/*
  Warnings:

  - You are about to drop the `example` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "example";

-- CreateTable
CREATE TABLE "anime" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumb" TEXT NOT NULL,
    "episodes" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "anime_pkey" PRIMARY KEY ("id")
);
