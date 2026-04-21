import axios from "axios";
import dotenv from "dotenv";
import { format } from "path";

dotenv.config();

const API_FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const API_GEO_URL = 'https://api.openweathermap.org/geo/1.0/direct';

const API_KEY = process.env.API_KEY;

export async function getGeoCoding(city) {
  const res = await axios.get(API_GEO_URL, {
    params: {
      q: city,
      appid: API_KEY
    }
  });

  return res.data;
}

export async function weatherForecast() {
  try {
    const geoData = await getGeoCoding('Jakarta');
    const res = await axios.get(API_FORECAST_URL, {
      params: {
        lat: geoData[0].lat,
        lon: geoData[0].lon,
        appid: API_KEY
      }
    });

    const result = formatForecast(res.data);

    const formatResult = result.map(
                            (w) => `${w.day}, ${w.date}: ${w.temp}°C`
                        )
    const transformedResult = "Weather Forecast: <br>" + formatResult.join("<br>");

    console.log("Weather Forecast: \n" + formatResult.join("\n"));
    
    return transformedResult;
  } catch (error) {
    const statusCode = error.response?.status || 500;
    const err = new Error(error.message);
    err.statusCode = statusCode;
    throw err;
  }
}


function formatForecast(data) {
  return data.list
    .filter(item => item.dt_txt.includes("12:00:00")) // ambil jam 12 siang
    .map(item => {
      const date = new Date(item.dt_txt);

      const day = date.toLocaleDateString("en-US", { weekday: "short" });
      const formattedDate = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });

      const tempC = (item.main.temp - 273.15).toFixed(2); // Kelvin → Celsius

      return {
        day: day,
        date: formattedDate,
        temp: tempC
      };
    });
}