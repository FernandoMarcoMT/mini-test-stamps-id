# Stamps.id Mini Technical Test

This repository contains my submission for the Stamps.id mini technical test. The goal of this project is to demonstrate basic problem-solving skills and the ability to work with external APIs using JavaScript.

## Overview
The project consists of two tasks:
1. A small algorithmic program with specific rules
2. A simple weather forecast implementation using a public API

## Task 1: Small Program
- Generate numbers from 1 to 100
- Display them in reverse order (100 to 1)
- Apply the following rules:
  - Do not include prime numbers
  - Replace multiples of 3 with "Foo"
  - Replace multiples of 5 with "Bar"
  - Replace multiples of both 3 and 5 with "FooBar"
- Output is printed in a single horizontal line

## Task 2: Weather Forecast
- Fetch weather data from the OpenWeatherMap API
- Display the 5-day forecast for Jakarta
- Show only one temperature per day
- The API key is stored in environment variables and not exposed in the source code

## Tech Stack
- JavaScript

## How to Run
1. Clone this repository: `git clone <your-repo-url>` then `cd <your-project-folder>`
2. Install dependencies: `yarn install`
3. Create a `.env` file and add: `API_KEY=your_openweathermap_api_key`
4. Run the project: `yarn dev`