"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export async function updateProgress(increment) {
  const supabase = createClient();

  const { data, error: updateError } = await supabase
    .from("course_progress")
    .insert({ progress: Math.min(data.progress + increment, 100) });

  if (updateError) {
    console.log(updateError);
    return;
  }

  revalidatePath("/", "layout");
}
