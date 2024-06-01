"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export async function updateProgress(id, increment) {
  const supabase = createClient();

  // Pega o progresso atual
  const { data, error: fetchError } = await supabase
    .from("course_progress")
    .select("progress")
    .eq("id", id)
    .single();

  if (fetchError) {
    console.log(fetchError);
    return;
  }

  const newProgress = Math.min(data.progress + increment, 100);

  // Atualiza o progresso
  const { error: updateError } = await supabase
    .from("course_progress")
    .update({ progress: newProgress })
    .eq("id", id);

  if (updateError) {
    console.log(updateError);
    return;
  }

  revalidatePath("/", "layout");
}
