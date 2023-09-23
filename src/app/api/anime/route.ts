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

export async function POST (request:NextRequest){
   const body = await request.json();
   const {id,title,thumb,episodes,status} = body;
  
  try{
   await prisma.anime.create({
    data:{id,title,thumb,episodes,status}
  })
  
  return NextResponse.json({message:'Anime created'},{status:201});
  }
  catch(err){
    return NextResponse.json({err},{status:400})
  }

}
