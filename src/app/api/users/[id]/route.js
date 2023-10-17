import { NextResponse } from "next/server";

import { prisma } from "@/libs/prisma"
// console.log(prisma)


export async function GET(request, { params }) { //aqui tenemos request aunque no lo vamos a usar al ser una peticion get
    // console.log(params.id)//motramos por consola lo que recivimos,
    const user = await prisma.user.findUnique({
        where: {//where busca los que coincida
            id: Number(params.id)//buca lo que concida con esto
        }
    })
    // console.log(user)
    return NextResponse.json(user) //lo que mandaamos como respues
}

export async function DELETE(request, { params }) {
    const user = await prisma.user.delete({
        where: {//where busca los que coincida
            id: Number(params.id)//buca lo que concida con esto
        }
    })
    return NextResponse.json(user)
}


export async function PUT(request, { params }) {
    const data=await request.json()//transformamos el JSON  que recivimos como dato a JS y lo almacenamos en data
    const user = await prisma.user.update({ //.update para actualizar
        where: {//where busca los que coincida
            id: Number(params.id)//buca lo que concida con esto
        },
        data: data//como datos enviamos el data que es lo que se nos envio como request, solo se actualiza lo que tenga data, lo demas queda igual
        /*         {
                    userId: data.usetId,
                    score: data.score
                } */       
    })
    return NextResponse.json(user)
}
