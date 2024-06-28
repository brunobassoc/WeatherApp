
# Weather App

This Weather App is a simple web application that displays weather information for a specified location. The application uses the OpenWeatherMap API to fetch weather data and display it in a user-friendly interface. This project was the last assignment for my Frontend Introduction Class.

### Features

- Display current temperature, weather conditions, and other relevant weather information.
- Show weather icons representing current weather conditions.
- Handle user input to search for weather information by city name.
- Display error messages for invalid city names or empty input.
- Responsive design, ensuring the app looks good on both desktop and mobile devices.

### Technologies Used

- React: JavaScript library for building user interfaces.
- Axios: Promise-based HTTP client for making API requests.
- OpenWeatherMap API: Service providing weather data.

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
2. Navigate to the project directory:
   ```bash
   cd weather-app
3. Install the project dependencies:
   ```bash
   npm install
4. Create a `.env` file in the root directory of the project and add your OpenWeatherMap API key:
   ```bash
   REACT_APP_WEATHER_API_KEY=your_api_key_here
5. Start the development server:
   ```bash
   npm start
6. Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Usage

1. Enter the name of the city you want to search for in the input field.
2. Press the "Search" button or hit "Enter".
3. The app will display the current weather information for the specified city.

## Folder Structure

```
/src
  /assets
    blue_sky.jpg
  /components
    Header.js
    SearchBar.js
    WeatherInfo.js
  /styles
    Header.css
    SearchBar.css
    WeatherInfo.css
    App.css
  App.js
  index.js  
```

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create an issue or a pull request in the repository!

## Acknowledgements

This project was developed by following the tutorial provided by Code Commerce and then the project was changed by the task demands and my preferences.\
Watch the tutorial here: [YouTube - Weather App Tutorial by  Code Commerce](https://www.youtube.com/watch?v=UjeXpct3p7M)\


Special thanks to professor Jaison Schmidt for his excellent classes and lessons in this semester, teaching us about the Frontend Development.