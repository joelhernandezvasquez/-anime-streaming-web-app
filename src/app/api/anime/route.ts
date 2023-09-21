import prisma from "@/lib/prisma";
import { NextResponse,NextRequest } from "next/server";

interface Segment{
  params:{
      id:string
  }
}

export async function GET(request:Request,response:Response) {
   try{
     const animes = await prisma.anime.findMany();

     return NextResponse.json({animes},{status:200});
   }
   catch(err){
    if(err instanceof Error){
        console.log(err.message);
    }
   } 
}
