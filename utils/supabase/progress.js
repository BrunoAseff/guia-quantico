"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export async function updateProgress(increment) {
  const supabase = createClient();

  const newProgress = Math.min(data.progress + increment, 100);

  const { data, error: updateError } = await supabase
    .from("course_progress")
    .insert({ progress: newProgress });

  if (updateError) {
    console.log(updateError);
    return;
  }

  revalidatePath("/", "layout");
}
