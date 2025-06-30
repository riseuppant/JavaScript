const weatherForm = document.querySelector(".weatherForm")
const cityInput=document.querySelector(".cityInput")
const card=document.querySelector(".card")
const api_key="d10868a0923c861d1c6ddad1fe3682d8"

weatherForm.addEventListener("submit",async event=>{
    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData=await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.log(error);
            displayError(error)
        }
    }
    else{
        displayError("Please Enter the City")
    }
})

const getWeatherData=async(city)=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const response = await fetch(url)
    if(!response.ok){
        throw new Error("There is some error fetching the Resource")
    }
    let data= await response.json()
    return data;
}

const displayWeatherInfo=(data)=>{
    const {name: city,
           main:{temp,humidity},
           weather : [{description,id}]}= data;
    card.textContent=""
    card.style.display="flex";

    const cityDisplay=document.createElement("h1")
    const tempDisplay=document.createElement("p")
    const humidityDisplay=document.createElement("p")
    const descDisplay=document.createElement("p")
    const weatherEmoji=document.createElement("p")
    
    cityDisplay.textContent=city;
    tempDisplay.textContent=`${(temp-273.15).toFixed(1)}°C`;
    humidityDisplay.textContent=`Humidity:${humidity}`;
    descDisplay.textContent=description;
    weatherEmoji.textContent=getWeatherEmoji(id);
    
    cityDisplay.classList.add("cityDisplay")
    tempDisplay.classList.add("tempDisplay")
    humidityDisplay.classList.add("HumidityDisplay")
    descDisplay.classList.add("descDisplay")
    weatherEmoji.classList.add("weatherEmoji")

    card.appendChild(cityDisplay)
    card.appendChild(tempDisplay)
    card.appendChild(humidityDisplay)
    card.appendChild(descDisplay)
    card.appendChild(weatherEmoji)
}   

const getWeatherEmoji=(weatherId)=>{
    switch(true){
        case (weatherId >=200 && weatherId<300):
        {
            return "⛈️";
        }
        case ( weatherId>=300 &&weatherId<400):
        {
            return "🌧️";
        }
        case ( weatherId>=500 &&weatherId<600):
        {
            return "🌧️";
        }
        case ( weatherId>=600 &&weatherId<700):
        {
            return "❄️";
        }
        case ( weatherId>=700 &&weatherId<800):
        {
            return "🌫️";
        }
        case (weatherId==800):{
            return "☀️";
        }
        case(weatherId>801 && weatherId<810):
        {
            return "☁️";
        }
        default : {
            return "❓";
        }
    }
}

const displayError=(message)=>{
    const errorDisplay = document.createElement("p")
    errorDisplay.textContent=message ;
    errorDisplay.classList.add("errorDisplay");

    card.textContent="";
    card.style.display="flex";
    card.appendChild(errorDisplay);
}