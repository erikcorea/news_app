import React, { useState, useEffect } from 'react';
import '../styling/weather.css';
import axios from 'axios';

export default function Weather() {
    const [weather, setWeather] = useState();
    const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=NYC`
    console.log(process.env);
    useEffect( async () => {
        await fetch(url)
            .then((res) => res.json())
            .then((resJson) => setWeather(resJson))
            .catch(console.error)
    }, [])

  return (
    <>
      {console.log(weather)}
      <div className='weather-container'>
        <div className='icon-temp'>
          <img src={`${weather?.current.condition.icon}`} alt='' />
          <h1>{`${weather?.current.temp_f} °F`}</h1>
        </div>
        <h1>{`${weather?.location.name}, ${weather?.location.region}`}</h1>
      </div>
    </>
  )
}
