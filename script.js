function weatherInfo(){
    let city = document.querySelector('#cityInput').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fc88024ec382ee9e56b36be656b2e0c8&units=metric`;

   fetch(url)
  .then(response => response.json())
  .then(data => {
  if (data.cod === "404") {
  document.querySelector(".output").innerHTML = `
    <p style="color: red; font-weight: bold;">
      🚫 City not found. Please try again!
    </p>`;
  return;
}

  console.log(data);
  const cityName = data.name;
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  
  document.querySelector(".output").innerHTML = `
    <div style="text-align:center; background-color: rgb(54, 53, 53); padding: 10px; border-radius: 10px; color: white; width: 80%; max-width: 400px;">
      <h2>${cityName}</h2>
      <img src="${iconUrl}" alt="Weather icon">
      <p><strong>${description.toUpperCase()}</strong></p>
      <p>🌡️ Temperature: ${temperature}°C</p>
      <p>💧 Humidity: ${humidity}%</p>
      <p>💨 Wind Speed: ${windSpeed} m/s</p>
    </div>
  `;
})

  }
  let date = new Date();
  let setDate = document.querySelector('.date');
  setDate.innerText=`Today's Date: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

 
