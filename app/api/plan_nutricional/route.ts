import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

// Esto solo en backend, nunca exponer al frontend
const supabase = createClient(
  process.env.SUPABASE_URL!,             // tu URL de Supabase
  process.env.SUPABASE_SERVICE_ROLE_KEY! // tu service role key
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("PlanNutricional") // reemplaza con una tabla existente
      .select("*")
      .limit(1);

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}