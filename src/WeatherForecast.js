import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Tue</div>
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperatues">
              <span className="WeatherForecast-temperatures-max">19°</span>
              <span className="WeatherForecast-temperatures-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
