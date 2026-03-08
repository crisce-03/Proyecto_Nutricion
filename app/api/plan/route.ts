import { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);



export async function POST(req: NextRequest) {

    try{
        const { id_Usuario,fecha, momento } = await req.json();

        if(!id_Usuario ){
        return Response.json({error: "Datos nesecarios"},{status:400});
        }

        const {data,error} = await supabase.from("PlanNutricional").insert({
            id_Usuario,
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

export async function GET(req: NextRequest) {

    try{
        const { id } = await req.json();

        if(!id ){
        return Response.json({error: "Id Nesecario"},{status:400});
        }

        const {data,error} = await supabase.from("PlanNutricional").select().eq("id",id);

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
