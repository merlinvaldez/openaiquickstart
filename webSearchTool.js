import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
  model: "gpt-5.2",
  tools: [
    {
      type: "web_search",
    },
  ],
  input: `Make a mini language learnign newspaper for a Japanese Language beginner that
    takes a showcases the top news story from the dominican republic, usa and japan in simple to read japanese for a beginner.
    Include a glossary of terms with their pronounciation in romanji, as well as a couple of mini practice exercises to help learn in context`,
});

console.log(response.output_text);
