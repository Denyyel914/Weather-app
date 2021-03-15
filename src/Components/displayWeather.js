import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
import './displayWeather.css';
const DisplayWeather = (props) => {
//    const {data} = props;
   const src = `http://openweathermap.org/img/wn/${props.imgSrc}@2x.png`
   const date = new Date().toLocaleTimeString()
   const day = new Date().toDateString()
    return <div className="flex">
        <h1><RoomIcon />{props.cityName},{props.country}</h1>
        <img src={src} />
        <h3>°{props.temp}</h3>
        <h3>{props.data}</h3>
        {/* <p>{props.main}</p>
        <p>As of: {day} {date}</p>
        <h1>Clouds: {props.data}</h1>
        <h1>Celcius: °{props.temp}</h1>
        <h2>{props.cityName},{props.country}</h2>
        <h2>Humidity: {props.humidity} %</h2>
        <h2>Pressure: {props.humidity} hPa</h2>
        <h2>visibility: {props.visibility} km</h2>
        <h2>Wind: {props.win} km/hr</h2>
        <h2>Wind direction: {props.direction}° deg</h2>
        <h2>Sunrise: {props.sunrise}</h2>
        <h2>Sunset: {props.sunset}</h2>
        <img src={src} /> */}
    </div>
}

export default DisplayWeather;