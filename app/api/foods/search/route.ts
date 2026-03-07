import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    if (!query) {
      return Response.json({ error: "Query is required" }, { status: 400 });
    }

    // 1️⃣ Obtener token
    const tokenResponse = await fetch(
      "https://oauth.fatsecret.com/connect/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: process.env.FATSECRET_CLIENT_ID!,
          client_secret: process.env.FATSECRET_CLIENT_SECRET!,
        }),
      }
    );

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 2️⃣ Buscar alimentos
    const foodResponse = await fetch(
      `https://platform.fatsecret.com/rest/server.api?method=foods.search&search_expression=${query}&format=json`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const foodData = await foodResponse.json();

    const foods = foodData.foods.food;

    return Response.json(foods); 

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}