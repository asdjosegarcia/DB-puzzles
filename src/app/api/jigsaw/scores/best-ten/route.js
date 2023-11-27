import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma"

export const dynamic = "force-dynamic";

export async function GET(){
    const jigsawScoresTen=await prisma.JigsawScore.findMany({
        take: 10, // limitamos los resultados a 10
        orderBy: {
          score: "desc", // Ordena por puntuación de manera descendente
        },
    })
    console.log(jigsawScoresTen)
    return NextResponse.json(jigsawScoresTen,{
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
        revalidate: 1, // desactiva el caché
      })
}