import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma"

export const dynamic = "force-dynamic";

export async function GET(){
    const jigsawScoresTen=await prisma.jigsawScore.findMany({
        take: 10, // limitamos los resultados a 10
        orderBy: {
          score: "desc", // Ordena por puntuación de manera descendente
        },
    })
    console.log(jigsawScoresTen)
    return NextResponse.json(jigsawScoresTen)
}