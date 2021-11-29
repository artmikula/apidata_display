import { useState } from "react";

function DataDisplay({ SubmitData, error }) {
  const [searchValues, setSearchValues] = useState({ city: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    SubmitData(searchValues);
  };

  return (
    <form autoComplete="off" onSubmit={submitHandler}>
      <div className="form-inner">
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            id="city"
            onChange={(e) =>
              setSearchValues({ ...searchValues, city: e.target.value })
            }
            value={searchValues.city}
          />
        </div>
        <input type="submit" value="SubmitData" />
      </div>
    </form>
  );
}

export default DataDisplay;
