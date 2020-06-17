class Weather{ 
    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.API_KEY = 'c81e53b81606a1b882f5e34943cf73eb';
    }
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.API_KEY}&units=metric`);
        const responseData = await response.json();
        return {
            main_data: responseData.main,
            otherData: responseData.weather[0],
            wind: responseData.wind,
            systemData: responseData.sys,
            cityName: responseData.name,
            country: responseData.sys.country,
            currentTime: responseData.dt,
        }
    }
    changeLocation(city,country){
        this.city = city;
        this.country = country;
    }
}