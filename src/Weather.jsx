import {useEffect, useState} from "react";

export default function Weather() {
    const [latLng, setLatLng] = useState({});
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!latLng.lat && !latLng.long) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLatLng({lat: position.coords.latitude, long: position.coords.longitude});
            });
            return;
        }
        if (!data) {
            fetch(`${import.meta.env.VITE_APP_API_URL}/weather/?lat=${latLng.lat}&lon=${latLng.long}&units=metric&APPID=${import.meta.env.VITE_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => setData(result));
        }
    }, [latLng])

    return (
        <div>
            <h2>The weather today ☁️</h2>
            <br/>
            {!data ? <p>Loading...</p> : <>
                <p>Weather for: {data.name}</p>
                <p>Temp: {data.main.temp}° ({data.weather[0].main})</p>
            </>}
        </div>
    );
}