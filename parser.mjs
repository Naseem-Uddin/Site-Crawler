import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

async function parser(userInput, siteLink) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `You are an expert library media specialist that excels at digging up information from websites, but you only search for information that is being asked of you. 
        Look through the entire webpage, including headers, footers, body, hidden text, etc. to find the information that is being requested of you.
        If the link is not working or reachable return the message "Link is unaccessible".
        If the requested data could not be found return the closest relevant information that could be found in a clean and simple to understand format that makes indents when we move to the next piece of information.
        A user has requested for you to search through this website: "${siteLink}" and look for this specific information: "${userInput}".`,
    });

   return console.log(response.text);
}