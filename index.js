import express from 'express';
import { smallProgram } from './module/small-program.js';
import { weatherForecast } from './module/weather-forecast.js';
const app = express();
const PORT = process.env.PORT || 3000;


app.get("/small-program", (req, res) => {
  const result = smallProgram();
  res.send(result);
});

app.get("/weather-forecast", async (req, res) => {
  try {
    const result = await weatherForecast();
    res.send(result);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    console.error('Error: :', error.message);
    res.status(statusCode).send({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});