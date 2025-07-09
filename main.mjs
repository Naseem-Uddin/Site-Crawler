import { parser } from "./parser.mjs"

export default main((userInput, siteLink) => {
    /* TO DO:
    Step 1: User Input
        Get siteLink (main URL)
        Get userInput (the info they want)

    Step 2: Crawl the Main Site
        Fetch the HTML content of siteLink
        Parse it to extract all the <a href="..."> links
        Filter for links that are:
            Internal (same domain)
            Non-duplicate
            Valid URLs (handle relative paths, skip # anchors)

    Step 3: Run Parser for each link
        For each link:
            Pass it (and userInput) to your parser() function

        That function will:
            Ask Gemini to search that page for the requested info
            Return a response
    */

    return parser(userInput, siteLink);

    /* (continued)
    Step 4: Store the Responses
        Collect all responses from parser() into:
            Next API LLM call for parsing into a csv file, or if possible direct entry into csv without AI

        Store that in:
            The users database or an made csv file that is downloadable if they dont have an account

        This gives you a reusable dataset for later analysis or summarization.

    Step 5: Addition Functionalities
        -- Decide if we want to add them when the time comes
    */
})