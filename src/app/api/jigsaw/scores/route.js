import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma"


export async function GET(){
    const jigsawScores=await prisma.jigsawScore.findMany()
    return NextResponse.json(jigsawScores)
}