import React, { useState, useEffect } from 'react';
import axios from 'axios';
//http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London

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
    <div><h1>{`${weather?.location.name}`}</h1></div>
  )
}
