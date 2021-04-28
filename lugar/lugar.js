const axios = require("axios");
const resp = require('../const/responses.js').resp;

const getLugarLatLng = async(direcion) => {
    const encodedUlr = encodeURI(direcion)

    const options = axios.create({
        method: 'GET',
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        params: { location: encodedUlr },
        headers: {
            'x-rapidapi-key': '55c170b44cmsh84b31efb566b429p1278cfjsn93baee53cd1c',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });
    //console.log(resp);

    //  console.log('1');
    const respuestaApi = await options.get()
        //    console.log('2');
    let cityO = resp.Results.find((s) => s.name === direcion);
    //console.log(cityO);
    respuestaApi.data.Results = resp.Results;
    //console.log(`RESPUESTA ${cityO}`);
    const data = cityO;
    if (!cityO) {
        throw new Error(`No hay resultados para ${direcion}`)
    }
    const dir = data.name
    const lat = data.lat
    const lng = data.lon
    return {
        dir,
        lat,
        lng
    }


}

module.exports = {
    getLugarLatLng
}