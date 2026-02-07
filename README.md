# openaiquickstart

Quick project to understand how the OpenAI API works in JavaScript.

## Why this repo exists

I built this as a focused learning sandbox before adding AI features to my main project, Votefeed. The goal was to practice the core patterns (basic requests, streaming, tools, and multi‑agent flows) in isolation so I can wire them into Votefeed confidently.

## What is inside

- `basicRequest.js`: a simple one‑shot Responses API call.
- `streamedResponse.js`: streaming output as tokens arrive.
- `webSearchTool.js`: using the web_search tool in a request.
- `agents.js`: a multi‑step flow that turns a bill summary into a tweet (simplifier -> tweet maker).
- `simplifierAgent.txt`, `tweetMakerAgent.txt`, `sanitizer.txt`: prompt files for each agent role.

## How this helps Votefeed

The Votefeed pipeline I am working toward is:

1. Simplify a bill summary into plain language.
2. Convert that into a single, readable tweet.
3. Optionally sanitize the tweet to sound more human.

## Notes

- Assumes your OpenAI API key is already configured in your environment.
- Run any script with: `node <file>.js`
