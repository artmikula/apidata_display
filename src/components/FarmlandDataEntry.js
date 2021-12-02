import { useState } from "react";

function FarmlandDataEntry({ SubmitFarmData, error }) {
  const [farmData, setFarmData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    SubmitFarmData(farmData);
  };

  return (
    <div class="container">
      <div className="dataEntryTitle">
        <p>Farmland Data Entry</p>
      </div>
      <form id="farm-data-form" autoComplete="off" onSubmit={submitHandler}>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <ul id="farm-data-table">
          <li className="farmList">
            <label htmlFor="air_temperature">Air Temperature</label>
            <input
              type="text"
              name="air_temperature_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  air_temperature_min: e.target.value,
                })
              }
              value={farmData.temperature_min}
            />
            ~
            <input
              type="text"
              name="air_temperature_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  air_temperature_max: e.target.value,
                })
              }
              value={farmData.temperature_max}
            />
          </li>
          <li className="farmList">
            <label htmlFor="temperature">Precipitation</label>
            <input
              type="text"
              name="precipitation_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  air_precipitation_min: e.target.value,
                })
              }
              value={farmData.precipitation_min}
            />
            ~
            <input
              type="text"
              name="precipitation_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  air_precipitation_max: e.target.value,
                })
              }
              value={farmData.precipitation_max}
            />
          </li>
          <li className="farmList">
            <label htmlFor="humidity">Humidity</label>
            <input
              type="text"
              name="humidity_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  humidity_min: e.target.value,
                })
              }
              value={farmData.humidity_min}
            />
            ~
            <input
              type="text"
              name="humidity_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  humidity_max: e.target.value,
                })
              }
              value={farmData.humidity_max}
            />
          </li>
          <li className="farmList">
            <label htmlFor="ilsa">Ilsa</label>
            <input
              type="text"
              name="ilsa_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  ilsa_min: e.target.value,
                })
              }
              value={farmData.ilsa_min}
            />
            ~
            <input
              type="text"
              name="ilsa_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  ilsa_max: e.target.value,
                })
              }
              value={farmData.ilsa_max}
            />
          </li>
          <li className="farmList">
            <label htmlFor="terrain_roughness">Terrain Roughness</label>
            <input
              type="text"
              name="terrain_roughness_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  terrain_roughness_min: e.target.value,
                })
              }
              value={farmData.terrain_roughness_min}
            />
            ~
            <input
              type="text"
              name="terrain_roughness_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  terrain_roughness_max: e.target.value,
                })
              }
              value={farmData.terrain_roughness_max}
            />
          </li>
          <li className="farmList">
            <label htmlFor="wind">Wind</label>
            <input
              type="text"
              name="wind_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  wind_min: e.target.value,
                })
              }
              value={farmData.wind_min}
            />
            ~
            <input
              type="text"
              name="wind_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  wind_max: e.target.value,
                })
              }
              value={farmData.wind_max}
            />
          </li>
          <li className="farmList">
            <label>Athmospheric Pressure</label>
            <input
              type="text"
              name="athmospheric_pressure_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  athmospheric_pressure_min: e.target.value,
                })
              }
              value={farmData.athmospheric_pressure_min}
            />
            ~
            <input
              type="text"
              name="athmospheric_pressure_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  athmospheric_pressure_max: e.target.value,
                })
              }
              value={farmData.athmospheric_pressure_max}
            />
          </li>
          <li className="farmList">
            <label htmlFor="sunshine">Sunshine</label>
            <input
              type="text"
              name="sunshine_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  sunshine_min: e.target.value,
                })
              }
              value={farmData.sunshine_min}
            />
            ~
            <input
              type="text"
              name="sunshine_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  sunshine_max: e.target.value,
                })
              }
              value={farmData.sunshine_max}
            />
          </li>
          <li className="farmList">
            <label htmlFor="ground_temperature">Ground Temperature</label>
            <input
              type="text"
              name="ground_temperature_min"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  ground_temperature_min: e.target.value,
                })
              }
              value={farmData.ground_temperature_min}
            />
            ~
            <input
              type="text"
              name="ground_temperature_max"
              onChange={(e) =>
                setFarmData({
                  ...farmData,
                  ground_temperature_max: e.target.value,
                })
              }
              value={farmData.ground_temperature_max}
            />
          </li>
        </ul>
        <div class="row">
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
}

export default FarmlandDataEntry;
