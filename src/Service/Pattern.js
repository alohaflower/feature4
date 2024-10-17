import Parse from "parse";
import * as ENV from '../environments.js';


export const getAllPatterns = async () => {
    Parse.initialize(ENV.APPLICATION_ID,ENV.JAVASCRIPT_KEY);
    Parse.serverURL = ENV.SERVER_URL;
    const Pattern = Parse.Object.extend("plushies");
    const query = new Parse.Query(Pattern);

    let queryResults = await query.find();

    const formattedResults = queryResults.map((result) => ({
        id: result.id,
        imgName: result.get("imgName"),
        humanName: result.get("humanName"),
        animal: result.get("animal"),
        cost: result.get("cost"),
        description: result.get("description")
    }));

    return formattedResults;
};

export const getOnePattern = async (id) => {
    Parse.initialize(ENV.APPLICATION_ID,ENV.JAVASCRIPT_KEY);
    Parse.serverURL = ENV.SERVER_URL;
    const Pattern = Parse.Object.extend("plushies");
    const query = new Parse.Query(Pattern);

    let result = await query.get(id);

    const formattedResult = {
        id: result.id,
        imgName: result.get("imgName"),
        humanName: result.get("humanName"),
        animal: result.get("animal"),
        cost: result.get("cost"),
        description: result.get("description")
    };

    const formattedResults = [formattedResult]
    return formattedResults;
};
