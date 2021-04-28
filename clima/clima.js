const axios = require("axios");

const getClima = async(lat, lon) => {
    const options = axios.create({
        method: 'GET',
        baseURL: 'https://api.openweathermap.org/data/2.5/weather',
        params: { lat: lat, lon: lon, appid: 'e82f6072692f434c6f4e7c31ae7afb58' },
    });

    const respuestaClima = await options.get()
    const w = respuestaClima.data.weather
    return {
        w
    }
}

module.exports = {
    getClima
}