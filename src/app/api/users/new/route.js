import { NextResponse } from "next/server";

import { prisma } from "@/libs/prisma"
// console.log(prisma)

export async function POST(request){ //post para crear informacion, request la informacion que entra
    const {nickName,email}=await request.json()//extramos el user y score de la request que nos enviaron a la api
    const newUser=await prisma.user.create({ //creamos un nuevo objeto con los datos
        data:{
            nickName,
            email,
        }
    })
    return NextResponse.json(newUser)//la api nos va a responder con esto
}
// export async function PUT()