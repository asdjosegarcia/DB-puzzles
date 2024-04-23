
// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
  // Desactivar la caché
//   res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

  // Lógica para obtener los datos desde la base de datos con Prisma
//   const jigsawScores = await prisma.JigsawScore.findMany();
  
  // Loguear los resultados
//   console.log(jigsawScores);

  // Enviar la respuesta JSON
//   return NextResponse.json(res, jigsawScores);
// }

import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma"

export const dynamic = "force-dynamic";

export async function GET(){
    const jigsawScores=await prisma.JigsawScore.findMany()
    console.log(jigsawScores)
    return NextResponse.json(jigsawScores,{
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
        revalidate: 1, // desactiva el caché
      })
}
/*  {
        where: {
            map: 0,
        },
    } */

// export async function GET() { //aqui tenemos request aunque no lo vamos a usar al ser una peticion get
//     // console.log(params.id)//motramos por consola lo que recivimos,
//     console.log('pteicions')
//     const jigsawScores = await prisma.jigsawScore.findUnique({
//         where: {//where busca los que coincida
//             id: 1//buca lo que concida con esto
//         }
//     })
//     console.log(jigsawScores)
//     return NextResponse.json(jigsawScores) //lo que mandaamos como respues
// }
