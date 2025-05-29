function showFakeWeather(city) {
  const result = document.getElementById("weatherResult");

  const weatherConditions = [
    { main: "Sunny", icon: "☀️" },
    { main: "Cloudy", icon: "☁️" },
    { main: "Rainy", icon: "🌧️" },
    { main: "Thunderstorm", icon: "⛈️" },
    { main: "Windy", icon: "💨" },
    { main: "Foggy", icon: "🌫️" }
  ];

  // Random condition and temperature
  const condition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
  const temperature = (Math.random() * 15 + 24).toFixed(1); // 24°C to 39°C
  const windSpeed = (Math.random() * 5 + 1).toFixed(1);     // 1 to 6 m/s

  result.innerHTML = `
    <h2>${city}</h2>
    <div style="font-size: 50px;">${condition.icon}</div>
    <p><strong>${condition.main}</strong></p>
    <p>🌡️ Temperature: ${temperature}°C</p>
    <p>💨 Wind: ${windSpeed} m/s</p>
  `;
}
