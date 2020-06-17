class UI{
    constructor() {
        this.icon = document.getElementById('w-icon');
        this.feels = document.getElementById('w-feels');
        this.temp = document.getElementById('w-temp');
        this.pressure = document.getElementById('w-pressure');
        this.humidity = document.getElementById('w-hum');
        this.city = document.getElementById('w-city');
        this.speed = document.getElementById('w-speed');
        this.sunrise = document.getElementById('w-sunrise');
        this.sunset = document.getElementById('w-sunset');
        this.time = document.getElementById('w-time');
    }
    display({ main_data: { temp, pressure, humidity }, wind: { speed }, otherData: { description, icon },systemData:{sunrise,sunset},currentTime ,cityName, country }) {
        let windSpeed = ((speed * 3600) / 1000).toPrecision(4);
        let date1 = new Date(sunrise * 1000);
        let date2 = new Date(sunset * 1000);
        let date3 = new Date(currentTime * 1000);
        const iconURL = UI.genereteIcon(icon);
        this.icon.setAttribute('src', iconURL);
        this.feels.textContent = description;
        this.time.textContent = `Current Time : ${date3.toLocaleTimeString()}`;
        this.sunrise.textContent = `Sunrise : ${date1.toLocaleTimeString()}`;
        this.sunset.textContent = `Sunset : ${date2.toLocaleTimeString()}`;
        this.temp.textContent = `Temparature(cel) : ${temp}`;
        this.pressure.textContent = `Pressure(hpa) : ${pressure}`;
        this.humidity.textContent = `Humidity(%) : ${humidity}`;
        this.speed.textContent = `Wind Speed(km/h) : ${windSpeed}`;
        this.city.textContent = `${cityName},${country}`;
    }
    static genereteIcon(icon) {
        // console.log(icon);
        return 'https://openweathermap.org/img/w/' + icon + '.png';
    }
    clearField() {
        document.getElementById('city').value = '';
        document.getElementById('country').value = '';
    }
    setMessage(msg) {
        let para = document.querySelector('.jumbotron p');
        const div = document.createElement('div');
        div.className = "alert alert-danger";
        div.id = 'msg';
        div.textContent = msg;
        UI.hideMsg();
        para.insertAdjacentElement('afterend', div);
    }
    static hideMsg() {
        setTimeout(() => { 
            document.getElementById('msg').remove();
        }, 1500);
    }

}