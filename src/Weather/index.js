import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { WeatherStyle } from './style';

function Weather() {

    const [tmp, getTemp] = useState({});

    useEffect(() => {
        Axios.get('http://api.openweathermap.org/data/2.5/weather?q=tehran&appid=44fac919ba081613132b80b2204e4734&units=metric')
            .then(weather => getTemp(weather.data))
    }, [])

    return (
        <WeatherStyle>
            <h5>{`${tmp.name} weather`}</h5>
            <span>{tmp.main?.temp} &#8451;</span>

        </WeatherStyle>
    )

}

export default Weather;