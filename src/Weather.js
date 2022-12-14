import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-warning w-100"
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Tuesday 5:10</li>
          <li>Clear</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Clear"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">{temperature}</span>
                <span className="unit">℃</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 1%</li>
              <li>Humidity: 40%</li>
              <li>Wind: 4 mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "12405d318cb42t90a6edda364fo255cd";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
