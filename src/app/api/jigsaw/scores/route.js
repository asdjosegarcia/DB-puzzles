import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma"


export async function GET(){
    const jigsawScores=await prisma.JigsawScore.findMany()
    console.log(jigsawScores)
    return NextResponse.json(jigsawScores)
}