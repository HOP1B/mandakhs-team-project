import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (
  _: NextRequest,
  { params }: { params: Promise<{ caseId: string }> }
) => {
  const { caseId } = await params;
  const cases = await prisma.cases.findUnique({
    where: {
        id: caseId
    },
    include:{
        skins:{
            include:{
                skin: true
            }
        }
    }
  });
  
    return NextResponse.json(cases);
  };
