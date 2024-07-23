import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";


export async function GET(request, { params }) { //aqui tenemos request aunque no lo vamos a usar al ser una peticion get
    console.log(params.map)//motramos por consola lo que recivimos,
    const jigsawScore = await prisma.jigsawScore.findMany({
        where: {//where busca los que coincida
            map: Number(params.map)//buca lo que concida con esto
        },
        orderBy: {
          score: "desc", // Ordena por puntuación de manera descendente
        },
        take: 10, // limitamos los resultados a 10
    })
    console.log(jigsawScore)
    return NextResponse.json(jigsawScore) //lo que mandaamos como respues
}