import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
  model: "gpt-5.2",
  input:
    "Make an ASCII drawing of a scene from a classical book, be sure to return the title of the book and the scene. ",
});

console.log(response);
