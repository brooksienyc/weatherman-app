import axios from "axios";
import React, { useState, useEffect } from 'react';
import WeatherInfo from '../Components/WeatherInfo';
import useAxios from "../hooks/useAxios";

function WeatherSearch() {

    const [setUrl, data, loading, isLoading, error] = useAxios();

    const [cityName, setCityName] = useState("New York City");
    const [cityData, setCityData] = useState();

    useEffect(
        () => {
            //fetch city weather data
            const API_KEY = process.env.REACT_APP_API_KEY;
            let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + API_KEY;

            console.log("name:" + cityName + ", url:" + url);

            setUrl(url);
            isLoading(true);
        },
        [cityName]

    )

    async function handleSubmit(e) {
        e.preventDefault();

        let cityName = e.target.cityName.value;
        setCityName(cityName);

        // const API_KEY = process.env.REACT_APP_API_KEY;



        //    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + "800654645b9a0f769ed29d6bbe4375fd";
        // let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + API_KEY;

        // console.log("name:" + cityName + ", url:" + url);


        // try {
        //     console.log("Are we here yet?");
        //     let result = await axios.get(url);

        //     console.log("Result:" + JSON.stringify(result));

        // }
        // catch (error) {
        //     console.log("error:" + e);
        //     alert("Error, could not fetch data:" + error);
        // }
    }


    return (
        <>
            <main role="main" className="inner cover">
                
                <h1 className="cover-heading">Weather Info.</h1>
                <h2>Please enter the name of a city.</h2>
                <form className="form-group mx-auto my-2 w-50" onSubmit={handleSubmit}>

                    {/* <label>City</label> */}
                    <input className="form-control my-4" name="cityName" type="text" placeholder="Name of City"></input>

                    <button type="submit" className="btn">Submit</button>
                </form>
                {
                    (!loading && data)

                        ?
                        <WeatherInfo data={data} />
                        :
                        <h1>Loading...</h1>
                }
            
            </main>
        </>
    );
}

export default WeatherSearch;