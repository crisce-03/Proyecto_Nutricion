export async function GET() {
  return Response.json({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anon: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "OK" : "MISSING",
    fatsecret: process.env.FATSECRET_CLIENT_ID ? "OK" : "MISSING"
  });
}