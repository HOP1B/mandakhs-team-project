import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");
  if (userId) {
    return NextResponse.json({ message: "userId is not present!" });
  }
  const userWallet = prisma.wallet.findFirst({
    where: {
      userId: userId as string,
    },
  });
  if (userWallet) return NextResponse.json(userWallet);

  const newWallet = await prisma.wallet.create({
    data: {
      userId: userId as string,
      balance: 1_000,
    },
  });
  return NextResponse.json(newWallet);
};

export const POST = async (req: NextRequest) => {
  try {
    const { userId, amount } = await req.json();

    if (!userId || amount === undefined || amount <= 0) {
      return NextResponse.json(
        {
          error:
            "Invalid input. userId and amount are required and amount must be greater than 0.",
        },
        { status: 400 }
      );
    }

    let wallet = await prisma.wallet.findFirst({
      where: { userId },
    });

    if (!wallet) {
      wallet = await prisma.wallet.create({
        data: {
          userId,
          balance: amount,
        },
      });

      return NextResponse.json(wallet, { status: 201 });
    }

    wallet = await prisma.wallet.update({
      where: { id: wallet.id },
      data: {
        balance: {
          increment: amount,
        },
      },
    });

    return NextResponse.json(wallet, { status: 200 });
  } catch (error) {
    console.error("Error processing wallet:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
