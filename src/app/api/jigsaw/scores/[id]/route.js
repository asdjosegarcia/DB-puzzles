import { NextResponse } from "next/server";

import { prisma } from "@/libs/prisma"
// console.log(prisma)


export async function GET(request,{params}){ //aqui tenemos request aunque no lo vamos a usar al ser una peticion get
    console.log(params.id)//motramos por consola lo que 
    const jigsawScore= await prisma.jigsawScore.findUnique  ({
        where:{//where busca los que coincida
            id: Number(params.id)//buca lo que concida con esto
        }
    })
    console.log(jigsawScore)
    return NextResponse.json(jigsawScore+params.id) //lo que mandaamos como respues
}

