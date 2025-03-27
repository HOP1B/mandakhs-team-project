import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  const { id } = await req.json();
  const skin = await prisma.inventory.findUnique({
    where: { id },
    include: {
      skin: true,
    },
  });

  if (!skin) {
    return NextResponse.json({ message: "Skin oldsongui" }, { status: 404 });
  }

  let wallet = await prisma.wallet.findFirst({
    where: {
      userId: skin.userId,
    },
  });

  if (!wallet) {
    wallet = await prisma.wallet.create({
      data: {
        userId: skin.userId,
        balance: 1_000,
      },
    });
  }

  wallet = await prisma.wallet.update({
    where: {
      id: wallet.id,
    },
    data: {
      balance: wallet.balance + skin.skin.price,
    },
  });

  await prisma.inventory.delete({
    where: { id: skin.id },
  });

  return NextResponse.json({ message: "Skin refunded!" });
};
