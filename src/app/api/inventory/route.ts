import { PrismaClient } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  const { skinsId, userId }: { skinsId: string; userId: string } =
    await req.json();

  const skin = await prisma.skins.findUnique({
    where: { id: skinsId },
  });

  if (!skin) {
    return NextResponse.json({ message: "Skin oldsongui" }, { status: 404 });
  }
  
  const inventory = await prisma.inventory.create({
    data: {
      userId: userId,
      skin: {
        connect: {
          id: skinsId
        },
      },
    },
  });
 
 
  return NextResponse.json(inventory, { status: 200 });
};

export const GET = async (req: NextRequest) => {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId")
    if(!userId){
        return NextResponse.json({ message: "UserId hooson baij bolohgui!" }, { status: 400 });       
    }
    const skins = await prisma.inventory.findMany({
        where: {
            userId,
        },
        include: {
            skin: true
        }
    })
    return NextResponse.json(skins);
}