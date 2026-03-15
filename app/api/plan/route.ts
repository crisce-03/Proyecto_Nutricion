import { NextRequest } from "next/server";
import { supabase } from "@/lib/supabaseServer";




export async function POST(req: NextRequest) {

    try{
        const { id_usuario,fecha, momento } = await req.json();

        if(!id_usuario ){
        return Response.json({error: "Datos nesecarios"},{status:400});
        }

        const {data,error} = await supabase.from("PlanNutricional").insert({
            id_usuario,
            fecha,
            momento
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


export async function GET(req: NextRequest ) {

    try{

        const {searchParams}= new URL(req.url);

        const userId=searchParams.get("userId");
        const fecha =searchParams.get("fecha");



        if (!userId || !fecha) {
      return Response.json(
        { error: "userId y fecha son necesarios" },
        { status: 400 }
      );
    }

        const { data, error } = await supabase
            .from("PlanNutricional")
            .select(`
                id,
                momento,
                DetalleAlimentos (
                nombre,
                cantidad
                )
            `)
            .eq("id_usuario", userId)
            .eq("fecha", fecha);

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




