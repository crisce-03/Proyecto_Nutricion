import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(){
    try{
        const {data, error} = await supabase.from("DetalleAlimentos").select("*");

        if (error){
            return Response.json({error: error.message}, {status: 500});
        }

        return Response.json(data, {status: 200});

    }catch(error){
        console.error(error);
        return Response.json({error: "Server error"}, {status: 500});
    }
}

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