import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are CommerceCult's content engine." },
        { role: "user", content: prompt }
      ]
    });

    const output = completion.choices[0].message.content;

    return res.status(200).json({ output });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "AI generation failed" });
  }
}
