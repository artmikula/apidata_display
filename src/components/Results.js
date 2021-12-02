import { useState } from "react";
import { useEffect } from "react";

function Results({ apiData }) {
  return (
    <div className="results">
      <div className="recommendations">
        <title>Recommended Crops</title>
        <div>
          <div className="recommend">
            <p>Crop Recommendations</p>
            <h2>Strawberry</h2>
            <p>Suitable Temperature</p>
            <h3>Temperature : </h3>
            <h3>Air volume : </h3>
            <h3>Terrain rigidity : </h3>
            <input type="text" placeholder="Input text here" />
          </div>
          <div className="buttons">
            <input type="button" value="Cancel" />
            <input type="button" value="Submit" />
          </div>
        </div>
      </div>
      <div className="recommendations_map">
        <title>Recommended climate zones</title>
      </div>
    </div>
  );
}

export default Results;
