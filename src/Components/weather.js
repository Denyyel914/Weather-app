import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import DisplayWeather from './displayWeather';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { Button,Form,Row,Col,Container, Collapse } from 'react-bootstrap';
import './weather.css';

const Weather = () => {

    const API = '9b02401ca86b7beeac0bd616cdd0908d';
    const [weather, setWeather] = useState({
        city: "",
        country: ""
    });

    const [store,setStore] = useState(null);

    // const [open,setOpen] = useState(true);

        
    const dataWeather = async () => {
        if(weather.city === "") {
            alert('hehehe');
        } else {
            await axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${weather.city},${weather.country}&appid=${API}`)
            .then(res => {
                console.log(res);
            const {data} = res;
            setStore(data);
            })
        }
    }

    // const handleClick = (e) => {e.preventDefault(), dataWeather() }
    const handleClick = (e) => {
        e.preventDefault();
        dataWeather() 
        // setOpen(!open)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setWeather(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }
    

    return (
        <div className="weather-app">
            <Container>
            <div className="flex">
            <h1>Weather App <WbSunnyIcon className="icon" /></h1>
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Control placeholder="First name" type="text" name="city" placeholder="city" onChange={handleChange} value={weather.city} />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" type="text" name="country" placeholder="country"  onChange={handleChange} value={weather.country}/>
                    </Col>
                <Button variant="primary" onClick={handleClick} aria-controls="example-collapse-text"
>Submit</Button> 
                </Form.Row>
            </Form>
            </div>
            
            </Container>
            

             <div>
            {
                store != undefined ? (
                    <Container>
                    <DisplayWeather id="example-collapse-text" cityName={store.name} sunrise={new Date(store.sys.sunrise * 1000).toLocaleTimeString()} sunset={new Date(store.sys.sunset * 1000).toLocaleTimeString()} main={store.weather[0].main} country={store.sys.country} imgSrc={store.weather[0].icon} data={store.weather[0].description} temp={Math.floor(store.main.temp - 273.15)} humidity={store.main.humidity} pressure={store.main.pressure} visibility={store.visibility / 1000} win={Math.floor(store.wind.speed * 18) / 5 } direction={store.wind.deg}/>
                    </Container>
                ) : null
            }
            </div>
        </div>
        
    )
}

export default Weather;