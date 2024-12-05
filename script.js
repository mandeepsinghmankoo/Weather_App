const inputbox = document.querySelector('.input-box')
const searchbtn = document.getElementById('search-btn')
const weather_img = document.querySelector('.main-img')
const temperature = document.querySelector('.temp')
const Description = document.querySelector('.temp-desc')
const Humidity = document.querySelector('.hum-amt')
const Wind_Speed = document.querySelector('.speed-amt')

const locnotfound = document.querySelector('.loc-not-fnd')
const weather_body = document.querySelector('.weather-body')

async function checkweather(city) {
    const api_key = "46e8adbbcead37dc6e09f5969d396d2d"
    const base_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    
    const weather_data = await fetch(`${base_url}`).then(response => response.json())
    
        if(weather_data.cod === `404`){
            locnotfound.style.display = "flex"
            weather_body.style.display = "none"
            console.log("error")
            return
    
        }
        weather_body.style.display = "flex"
        locnotfound.style.display = "none"
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
    Description.innerHTML = `${weather_data.weather[0].description}`
    Humidity.innerHTML = `${weather_data.main.humidity}%`
    Wind_Speed.innerHTML = `${weather_data.wind.speed} m/s`


    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "/images/icons8-clouds-48.png"
            break;
        case 'Clear':
            weather_img.src = "/images/icons8-sun-48.png"
            break;

        case 'Rain':
            weather_img.src = "/images/icons8-rainy-48.png"

            break;
        case 'Snow':
            weather_img.src = "/images/icons8-snow-48.png"
            break;
        case 'Partialy':
            weather_img.src = "/images/icons8-clouds-48.png"
            break;
        case 'Clouds':
            weather_img.src = "/images/icons8-clouds-48.png"
            break;
    }
    console.log(weather_data)
}

searchbtn.addEventListener('click', () => {
    checkweather(inputbox.value)
})
