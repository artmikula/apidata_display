function DataDisplay({ SubmitData, error, searchValues, setSearchValues }) {
  const submitHandler = (e) => {
    e.preventDefault();
    SubmitData();
  };

  return (
    <div class="container">
      <div className="dataEntryTitle">
        <p>Farmland Data Entry</p>
      </div>
      <form autoComplete="off" onSubmit={submitHandler}>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div class="row">
          <div class="col-25">
            <label htmlFor="city">Data 1 :</label>
          </div>
          <div class="col-75">
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
        </div>
        <div class="row">
          <input type="submit" value="Show Data" />
        </div>
      </form>
    </div>
  );
}

export default DataDisplay;
