import { updateProgress } from "@/utils/supabase/progress";

export async function POST(req) {
  try {
    const { increment } = await req.json();

    await updateProgress(increment);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Failed to update progress:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update progress" }),
      { status: 500 }
    );
  }
}
