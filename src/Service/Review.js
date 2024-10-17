import Parse from "parse";


export const getReviews = async (id) => {
    const Review = Parse.Object.extend("reviews");
    const Plushie = Parse.Object.extend("plushies");
    const query = new Parse.Query(Review);

    const plushiePointer = new Plushie();
    plushiePointer.id = id;  
    query.equalTo("plushie", plushiePointer);

    let queryResults = await query.find();


    const formattedResults = queryResults.map((result) => ({
        body_text: result.get("body_text"),
        plushieId: result.get("plushie"),
        star_rating: result.get("star_rating")
    }));

    return formattedResults;
};
