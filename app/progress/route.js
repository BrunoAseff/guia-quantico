import { updateProgress } from "@/utils/supabase/progress";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id, increment } = req.body;

    try {
      await updateProgress(id, increment);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to update progress" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
