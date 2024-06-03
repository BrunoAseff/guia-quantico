"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export async function insertProgress(increment) {
  const supabase = createClient();

  // Insert new progress row
  const { data, error: insertError } = await supabase
    .from("course_progress")
    .insert({ progress: increment })
    .single();

  if (insertError) {
    console.log(insertError);
    throw new Error("Failed to insert progress");
  }

  // Revalidate path to ensure the progress is updated in the cache
  revalidatePath("/", "layout");

  return data.progress;
}
