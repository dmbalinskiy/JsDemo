const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const timeImg = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const forecast = new Forecast();

const updateUI = data => {
    
    //destructure properties
    const { cityDetails, weather} = data;
    console.log(data);

    //update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `
    //update the night/day & icon images
    timeImg.setAttribute('src', weather.IsDayTime ? 'Img/day.svg' : 'Img/night.svg');
    icon.setAttribute('src', `Img/Icons/${weather.WeatherIcon}.svg`)
    //remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}

cityForm.addEventListener('submit', e => {
    //prevent default value
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with the new city
    forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    //set local storage
    localStorage.city = city;
});

//each time whenever user refreshes/updates the page, this code executes
if(localStorage.city){
    forecast.updateCity(localStorage.city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
}