"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export async function updateProgress(userId, increment) {
  const supabase = createClient();

  const { data, error: fetchError } = await supabase
    .from("course_progress")
    .select("progress")
    .eq("user_id", userId)
    .single();

  if (fetchError) {
    console.log(fetchError);
    throw new Error("Failed to fetch progress");
  }

  const newProgress = Math.min(data.progress + increment, 100);

  // Update the progress
  const { error: updateError } = await supabase
    .from("course_progress")
    .update({ progress: newProgress })
    .eq("user_id", userId);

  if (updateError) {
    console.log(updateError);
    throw new Error("Failed to update progress");
  }

  revalidatePath("/");

  return newProgress;
}
