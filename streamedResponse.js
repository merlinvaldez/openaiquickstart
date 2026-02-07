import OpenAI from "openai";
const client = new OpenAI();

const stream = await client.responses.create({
  model: "gpt-5.2",
  input: [
    {
      role: "user",
      content: "Create a national anthem for sardines",
    },
  ],
  stream: true,
});

for await (const event of stream) {
  if (event.type === "response.output_text.delta") {
    process.stdout.write(event.delta);
  }
  if (event.type === "response.completed") {
    console.log("Done", event.response?.id);
  }
}
