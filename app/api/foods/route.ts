import { NextRequest } from "next/server";
import { supabase } from "@/lib/supabaseServer";



export async function POST(req: NextRequest) {

    try{
        const { id_Plan, id_ApiFood, nombre, cantidad, unidad } = await req.json();

        if(!id_ApiFood || !id_Plan ){
        return Response.json({error: "Datos nesecarios"},{status:400});
        }

        const {data,error} = await supabase.from("DetalleAlimentos").insert({
            id_Plan, 
            id_ApiFood, 
            nombre, 
            cantidad, 
            unidad
        }).select();

        if(error){
            return Response.json(
                {error: error.message},
                {status: 500}
            )
        }

     return Response.json(data);
    }catch(error){
        console.error(error);
        return Response.json({ error: "Server error" }, { status: 500 });
    }

    
}
