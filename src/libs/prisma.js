import { PrismaClient } from '@prisma/client'// nos da una clase

export const prisma = new PrismaClient()//alamacenamos la clase en una cosntante para exportarla y asi no tener que poner primaCLient en todos los componentes de la api

