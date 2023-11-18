import OpenAI from "openai";
import { OPENAI_API_KEY } from "./constants";

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // defaults to process.env["OPENAI_API_KEY"]
});
