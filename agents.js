import { Agent, run } from "@openai/agents";
import { readFile } from "node:fs/promises";

const modelChoice = "gpt-5.2";

const simplifierInstructions = await readFile(
  new URL("./simplifierAgent.txt", import.meta.url),
  "utf8",
);

const tweetMakerInstructions = await readFile(
  new URL("./tweetMakerAgent.txt", import.meta.url),
  "utf8",
);

const sanitizerInstructions = await readFile(
  new URL("./sanitizer.txt", import.meta.url),
  "utf8",
);

const billSummary = `Illegitimate Court Counteraction Act

This bill imposes sanctions against foreign persons (individuals and entities) who assist the International Criminal Court (ICC) in investigating, arresting, detaining, or prosecuting certain individuals.

The bill categorizes as protected persons (1) any U.S. individual, U.S. entity, or person in the United States, unless the United States is a state party to the Rome Statute of the ICC and provides formal consent to ICC jurisdiction; and (2) any foreign person that is a citizen or lawful resident of a U.S. ally that is not a state party to the Rome Statute or has not consented to ICC jurisdiction.

If the ICC attempts to investigate, arrest, detain or prosecute a protected person, the President must impose visa- and property-blocking sanctions against the foreign persons that engaged in or materially assisted in such actions, as well as against foreign persons owned by, controlled by, or acting on behalf of such foreign persons. The President must also apply visa-blocking sanctions to the immediate family members of those sanctioned.

Upon enactment, the bill rescinds all funds appropriated for the ICC and prohibits the subsequent use of appropriated funds for the ICC.`;

const simplifierAgent = new Agent({
  name: "Simplifier agent",
  model: modelChoice,
  instructions: simplifierInstructions,
});

const simplifierResult = await run(simplifierAgent, billSummary);

const tweetInput = [
  "bill_summary:",
  billSummary,
  "",
  "simplifier_recommendations:",
  simplifierResult.finalOutput,
].join("\n");

const tweetMakerAgent = new Agent({
  name: "TweetMaker Agent",
  model: modelChoice,
  instructions: tweetMakerInstructions,
});

const tweetResult = await run(tweetMakerAgent, tweetInput);

const sanitizerAgent = new Agent({
  name: "Sanitizer Agent",
  model: modelChoice,
  instructions: sanitizerInstructions,
});

const sanitizedResult = await run(sanitizerAgent, tweetResult.finalOutput);

console.log(sanitizedResult.finalOutput);
