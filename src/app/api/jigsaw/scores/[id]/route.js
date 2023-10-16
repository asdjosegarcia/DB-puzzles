import { NextResponse } from "next/server";

import { prisma } from "@/libs/prisma"
// console.log(prisma)


export async function GET(request, { params }) { //aqui tenemos request aunque no lo vamos a usar al ser una peticion get
    // console.log(params.id)//motramos por consola lo que recivimos,
    const jigsawScore = await prisma.jigsawScore.findUnique({
        where: {//where busca los que coincida
            id: Number(params.id)//buca lo que concida con esto
        }
    })
    // console.log(jigsawScore)
    return NextResponse.json(jigsawScore) //lo que mandaamos como respues
}

export async function DELETE(request, { params }) {
    const jigsawScore = await prisma.jigsawScore.delete({
        where: {//where busca los que coincida
            id: Number(params.id)//buca lo que concida con esto
        }
    })
    return NextResponse.json(jigsawScore)
}


export async function PUT(request, { params }) {
    const data=await request.json()//transformamos el JSON  que recivimos como dato a JS y lo almacenamos en data
    const jigsawScore = await prisma.jigsawScore.update({ //.update para actualizar
        where: {//where busca los que coincida
            id: Number(params.id)//buca lo que concida con esto
        },
        data: data//como datos enviamos el data que es lo que se nos envio como request, solo se actualiza lo que tenga data, lo demas queda igual
        /*         {
                    userId: data.usetId,
                    score: data.score
                } */       
    })
    return NextResponse.json(jigsawScore)
}

