
import prisma from "@/lib/prisma";
import { NextRequest,NextResponse } from "next/server";

interface Segment{
    params:{
        id:string
    }
}
export async function DELETE (request:NextRequest,{params}:Segment){

const anime = await prisma.anime.findFirst({where: {id:params.id}});

if(!anime){
    return NextResponse.json({message:`Anime not found`},{status:400})
}
 await prisma.anime.delete({where:{id:params.id}});

return NextResponse.json({message:"Anime was deleted succesfully"}, {status:200});
}