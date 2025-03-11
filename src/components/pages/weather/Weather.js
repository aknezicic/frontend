import { useState } from 'react';
import './Weather.css';

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchCoordinates = async (cityName) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${cityName}&format=json&limit=1`);
      const data = await response.json();
      if (data.length > 0) {
        return { lat: data[0].lat, lon: data[0].lon };
      } else {
        throw new Error('Location not found.');
      }
    } catch (err) {
      throw new Error('Error retrieving coordinates.');
    }
  };

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`,
        {
          headers: {
            'User-Agent': 'MyWeatherApp/1.0 (contact@example.com)',
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`Error retrieving weather forecast: ${response.status}`);
      }
  
      const data = await response.json();
      const timeseries = data.properties.timeseries;
        
      // Grupiramo podatke po datumu
      const dailyForecast = {};
  
      timeseries.forEach((entry) => {
        const date = entry.time.split('T')[0]; // Dobijemo npr. '2025-02-20'
  
        // Uzimamo podatke u podne (ili najbliže podne)
        if (!dailyForecast[date] || entry.time.includes('12:00:00')) {
          dailyForecast[date] = {
            temperature: entry.data.instant.details.air_temperature,
            windSpeed: entry.data.instant.details.wind_speed,
            humidity: entry.data.instant.details.relative_humidity,
            pressure: entry.data.instant.details.air_pressure_at_sea_level,
            symbol: entry.data.next_6_hours?.summary?.symbol_code || 'unknown',
          };
        }
      });
  
      // Uzimamo prvih 7 dana
      const forecastArray = Object.entries(dailyForecast).slice(0, 7).map(([date, details]) => {
        const formattedDate = new Date(date).toLocaleDateString('en-GB', {
          weekday: 'long',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        });
        return {
          date: formattedDate,
          ...details,
        };
      });
  
      setWeatherData(forecastArray);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };
  

  const handleSearch = async () => {
    setWeatherData(null);
    setError('');
    try {
      const { lat, lon } = await fetchCoordinates(city);
      await fetchWeather(lat, lon);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen weather">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 weather-forecast">
        <h1 className="text-2xl font-bold mb-4">Weather forecast</h1>
        <input
          type="text"
          placeholder="Enter the name of the city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border rounded w-full p-2 mb-4"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">
            Search
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {weatherData && (
            <div className="mt-4">
                <h2 className="text-lg font-semibold">Forecast for 7 days</h2>
                {weatherData.map((day) => (
                    <div key={day.date} className="p-2 border-b flex items-center">
                      <div className="w-1/3">
                        <p className="font-bold">{day.date}</p>
                        <p>Temperature: {day.temperature}°C</p>
                        <p>Wind: {day.windSpeed} m/s</p>
                        <p>Moisture: {day.humidity}%</p>
                        <p>Pressure: {day.pressure} hPa</p>
                      </div>
                      <div className="w-2/3 flex justify-end">
                        <p>Weather: {day.symbol}</p>
                        <img
                          src={`https://api.met.no/images/weathericons/png/${day.symbol}.png`}
                          alt={day.symbol}
                          className="w-16 h-16"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
  );
}



