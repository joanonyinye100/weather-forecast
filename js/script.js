let cityInput = document.getElementById("cityInput");
let weatherInfo = document.getElementById("weatherInfo");
let searchBtn = document.getElementById("searchBtn");
 searchBtn.addEventListener("click", display);

 function display(){
    let city = cityInput.value;
    let APIKey = `9db0c65413fe490e9d4797b75386d408`;
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

 fetch(apiUrl)
 .then(function(response) {
   if (!response.ok) {
     throw new Error('Network response was not ok');
   }
   return response.json();
 })
 .then(function(data) {
   const temperature = data.main.temp;
   const description = data.weather[0].description;
   const cityName = data.name;

   weatherInfo.innerHTML = `
     <BR>Weather in ${cityName}</br>
     <br>Temperature: ${temperature}°C</br>
     <br>Description: ${description}</br>
   `;
 })
 .catch(function(error) {
  
   weatherInfo.innerHTML = `Error: ${error.message}`;
 });
}
 
   

 console.log(fetch)
 console.log(Response);

 