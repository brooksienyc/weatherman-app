//remember to put prop in {} so it doesn't appear as juat a param but a prop - need to be same name as when introduced on WeatherSearch.js Line 73
import "../WeatherInfo.css";

function WeatherInfo({ data }) {
    let temperatureC = Math.round(data.main.temp - 273.15);
    let temperatureF = (temperatureC * 9 / 5) + 32;
    let description = data.weather[0].description;

    let humidity = data.main.humidity;
    let visibility = data.visibility;
    let windspeed = data.wind.speed;
    let wicon = data.weather[0].icon;
    

        return (
            // <>
            // <div>Here will be the weather data.</div>
            // <div>Temperature: {temperatureF} F;</div>
            // <div>{description}</div>
            // </>

            <div className ="container mt-5">


                <div id="card" className="weather">
                    <div className="details">
                        <div className="temp">
                            {temperatureF}
                            <span>&deg;</span>
                        </div>
                        <div className="right">
                            <div id="summary">{description}</div>
                            <div style={{ fontWeight: "bold", marginTop: "4px" }}>{data.name}</div>
                        </div>
                    </div>
                    <img className="weatherimg" alt="image1" src={`${wicon}.svg`} />
                    <div className="infos">
                        <img
                            alt="humidity1"
                            className="humidityimg infos-img"
                            style={{ width: "5", height: "5" }}
                            src="humidity.svg"
                        ></img>
                        <div className="humidity infos-text">Humidity {humidity}%</div>
                        <img
                            alt="visibility1"
                            className="visibilityimg infos-img"
                            style={{ width: "5", height: "5" }}
                            src="visibility.svg"
                        ></img>
                        <div className="visibility infos-text">Visibility {visibility} km</div>
                        <img
                            alt="windspeed1"
                            className="windimg infos-img"
                            style={{ width: "5", height: "5" }}
                            src="wind.svg"
                        ></img>
                        <div className="windspeed infos-text">Wind Speed {windspeed} km</div>
                    </div>
                </div>
            </div>

        );
    }

    export default WeatherInfo;