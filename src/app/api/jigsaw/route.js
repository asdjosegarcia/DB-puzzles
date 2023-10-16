import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json("Bienvenido a la seccion jigsaw de la api, aqui encontraras todos los datos de el puzzle jigsaw")
}