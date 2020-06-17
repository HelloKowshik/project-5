const storage = new Storage();
const ui = new UI();
let { city, country } = storage.getLocation();
let weather = new Weather(city, country);

document.addEventListener('DOMContentLoaded', weatherData);

document.getElementById('w-form').addEventListener('submit', e => {
    e.preventDefault();
    let city = document.getElementById('city').value;
    let country = document.getElementById('country').value;
    if (city === '' || country === ''){
        ui.setMessage('Empty Field Not Allowed!');
    } else {
        weather.changeLocation(city, country);
        storage.setLocation(city, country);
        ui.clearField();
        weatherData();
    }
});

function weatherData() {
    weather.getWeather()
    .then(data => {
        // console.log(data);
        ui.display(data);
    })
        .catch(e => {
            ui.setMessage("City/Country Not Found!");
    })
}