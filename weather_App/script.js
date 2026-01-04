var city = document.querySelector('#city');
var btnAction = document.querySelector('#btn-action');

var desc = document.querySelector('#desc');
var temp = document.querySelector('#temp');
var humid = document.querySelector('#humidity');
var pressure = document.querySelector('#pressure');

btnAction.addEventListener('click', async () => {
    if (city.value == '') {
        alert('Enter city name !!');
        return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=2d059c6be9a5d4c04dcd6c95d6abf658`;

    const res = await axios.get(apiURL);
    const resData = res.data;

    console.log(resData);

    temp.innerHTML =((Number.parseFloat(resData.main.temp) - 273.15)).toFixed(2) + " °C";
    desc.innerHTML = resData.weather[0].description;
    humid.innerHTML = resData.main.humidity + " %";
    pressure.innerHTML = resData.main.pressure + " hPa";
});