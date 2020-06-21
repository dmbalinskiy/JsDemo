class Forecast{
    constructor(){
        this.key = 'UVWTO6RwnebYVu1aiGDsuGFLk5rSkAZf';
        this.weatherURI = `http://dataservice.accuweather.com/currentconditions/v1/`;
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    //update data for selected city
    async updateCity(city){
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);
        return { cityDetails, weather };
    }

    //get city info
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(`${this.cityURI}${query}`);
        const data = await response.json();

        console.log(data);

        return data[0];
    }

    //get weather information
    async getWeather(cityId) {
        const query = `${cityId}?apikey=${this.key}`;
        const response = await fetch(`${this.weatherURI}${query}`);
        let resultArray = await response.json();

        console.log(resultArray);

        return resultArray[0];
    }
}
