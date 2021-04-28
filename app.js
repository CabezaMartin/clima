const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direcction: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).
argv;

/*lugar.getLugarLatLng(argv.direcction).
then((resp) => {
    console.log(resp)
    clima.getClima(resp.lat, resp.lng).
    then((r) => {
        console.log(r);
    });
});
*/
const getInfo = async(direcction) => {
    const coor = await lugar.getLugarLatLng(direcction);
    const cli = await clima.getClima(coor.lat, coor.lng);
    console.log(cli);
};

getInfo(argv.direcction);