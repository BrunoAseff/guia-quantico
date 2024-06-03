import { insertProgress } from "@/utils/supabase/progress";

export async function POST(req) {
  try {
    const { increment } = await req.json();

    const newProgress = await insertProgress(increment);
    return new Response(JSON.stringify({ newProgress }), { status: 200 });
  } catch (error) {
    console.error("Failed to insert progress:", error);
    return new Response(
      JSON.stringify({ error: "Failed to insert progress" }),
      { status: 500 }
    );
  }
}
