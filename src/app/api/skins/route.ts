import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
  const skins = await prisma.skins.findMany();

  return NextResponse.json(skins);
};
