import { updateProgress } from "@/utils/supabase/progress";

export async function POST(req) {
  try {
    const { id, increment } = await req.json();
    const newProgress = await updateProgress(id, increment);

    return new Response(JSON.stringify({ progress: newProgress }), {
      status: 200,
    });
  } catch (error) {
    console.error("Failed to update progress:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update progress" }),
      { status: 500 }
    );
  }
}
