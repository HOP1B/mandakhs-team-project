import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
  const cases = await prisma.cases.findMany();

  return NextResponse.json(cases);
};
