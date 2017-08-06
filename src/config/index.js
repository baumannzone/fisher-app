// wheather API
const darkSky = {
  key: '9277ff4e8c9629652ddb0280ffa5d1f9',
  example: 'https://api.config.net/forecast/9277ff4e8c9629652ddb0280ffa5d1f9/37.8267,-122.4233?exclude&lang=es',
  api: 'https://api.config.net/forecast',
  options: 'exclude&lang=es',
};

// wheather API
const openWeatherMap = {
  key: 'c4e6a34a92e6b8753d873b70a4f12f21',
  api1: 'https://api.openweathermap.org/data/2.5/forecast',
  api2: 'http://history.openweathermap.org/data/2.5/history/city',
};

// Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAFIXqGSv2sqhKDJDAm-h4ZWUIUfijWSVs',
  authDomain: 'fisher-app-db138.firebaseapp.com',
  databaseURL: 'https://fisher-app-db138.firebaseio.com',
  projectId: 'fisher-app-db138',
  storageBucket: 'fisher-app-db138.appspot.com',
  messagingSenderId: '869956372168',
};

export { darkSky, openWeatherMap, firebaseConfig };
