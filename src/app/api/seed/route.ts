import prisma from "@/lib/prisma";
import { NextResponse,NextRequest } from "next/server"

export async function GET (request:Request){

   // await prisma.anime.deleteMany();

   await prisma.anime.createMany({
     data : [
            {title:'Fullmetal Alchemist: Brotherhood',thumb:'https://cdn.myanimelist.net/r/50x70/images/anime/1208/94745.webp?s=f286786e3bc43d6dc5b4478a1762224b',episodes:64,status:'Finished Airing'},
            {title:'Steins;Gate',thumb:'https://cdn.myanimelist.net/r/50x70/images/anime/1935/127974.webp?s=983a0b526d944e68a933acca0a7db043',episodes:24,status:'Finished Airing'}
   ] 
   })
      return NextResponse.json({
       message:'Seed Executed'
      })
}
