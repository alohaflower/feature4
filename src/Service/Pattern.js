import Parse from "parse";
import * as ENV from '../environments.js';


export const getAllPatterns = async () => {

    Parse.initialize(ENV.APPLICATION_ID,ENV.JAVASCRIPT_KEY);
    Parse.serverURL = ENV.SERVER_URL;
    const patternData = Parse.Object.extend("plushies");
    const query = new Parse.Query(patternData);

    let queryResults = await query.find();

    const formattedResults = queryResults.map((result) => ({
        name: result.get("name"),
        imgName: result.get("imgName"),
        humanName: result.get("humanName"),
        animal: result.get("animal"),
        cost: result.get("cost"),
        description: result.get("description")
    }));

    console.log(formattedResults);
    return formattedResults;
};
