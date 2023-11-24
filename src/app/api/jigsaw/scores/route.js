import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma"


// export async function GET(){
//     const jigsawScores=await prisma.JigsawScore.findMany(/*  {
//         where: {
//             map: 0,
//         },
//     } */)
//     /* solo recuperariamos los que esten en el mapa  */
//     // console.log(jigsawScores)
//     return NextResponse.json(jigsawScores)
// }
export async function GET() { //aqui tenemos request aunque no lo vamos a usar al ser una peticion get
    // console.log(params.id)//motramos por consola lo que recivimos,
    const jigsawScores = await prisma.jigsawScore.findMany()
    // console.log('Datos recuperados:', jigsawScores);
    console.log(jigsawScores)
    return NextResponse.json(jigsawScores) //lo que mandaamos como respues
}
