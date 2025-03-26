/*
  Warnings:

  - You are about to drop the `skins` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "skins";

-- CreateTable
CREATE TABLE "Skins" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Skins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);
