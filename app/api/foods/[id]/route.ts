import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function PUT(req: NextRequest,{ params } : {params: Promise <{id: string}>}){
    try{
        const {id}  = await params;
        const {id_ApiFood, nombre, cantidad, unidad} = await req.json();
    
        const {data, error} = await supabase.from("DetalleAlimentos").update({id_ApiFood, nombre, cantidad, unidad}).eq("id", id).select();
    
        if (error){
            return Response.json({error: error.message}, {status: 500});
        }
    
        return Response.json(data, {status: 200});

    }catch(error){
        console.error(error);
        return Response.json({error: "Server error"}, {status: 500});
    }
}

export async function DELETE(req: NextRequest, { params } : {params: Promise <{id: string}>}){
    try{
        const {id}  = await params;
    
        const {data, error} = await supabase.from("DetalleAlimentos").delete().eq("id", id);
    
        if (error){
            return Response.json({error: error.message}, {status: 500});
        }
    
        return Response.json({mensaje: "Detalle de alimentos eliminado correctamente"}, {status: 200});

    }catch(error){
        console.error(error);
        return Response.json({error: "Server error"}, {status: 500});
    }
}