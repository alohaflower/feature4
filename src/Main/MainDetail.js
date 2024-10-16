import React from "react";
import { Link, useParams } from "react-router-dom";


const MainDetail = () => {
    const { imgName } = useParams();
    return (
        <div>
            <div>
                <Link to="/">Back</Link>
            </div>
            <p>Animal: {imgName}</p>
            <img
                  src={require(`../Images/${imgName}.jpeg`)}
                  width="225"
                  height="300"
                />
        </div>
    );
};

export default MainDetail;

  