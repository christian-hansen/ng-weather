import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  units?: string = 'metric';
  limit?: number = 1;
  defaultCities: Array<string> = ['Berlin'];

  constructor(private http: HttpClient) {}

  getWeatherData(city: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${environment.units}&limit=${environment.limit}&lang=en&appid=${environment.API_KEY}`
    );
  }

  getForecastData(city: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${environment.units}&limit=${environment.limit}&lang=en&appid=${environment.API_KEY}`
    );
  }

  getFourDaysHourlyForecastData(city: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast/hourly?q=${city}&units=${environment.units}&limit=${environment.limit}&lang=en&appid=${environment.API_KEY}`
    );
  }

  checkWeatherData(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${environment.units}&limit=${environment.limit}&lang=en&appid=${environment.API_KEY}`;
    return this.http.get(url).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  // getSixteenDaysForecastData(city: string) {
  //   return this.http.get(
  //     `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${environment.API_KEY}`
  //   );
  // }


  saveLocationsToLocalStorage(cities: Array<string>) {
    localStorage.setItem('weathercities', JSON.stringify(cities));
  }

  getSavedLocations() {
    //getitems from localstorage
    if (localStorage.getItem('weathercities')) {
      let loadedCities = JSON.parse(localStorage.getItem('weathercities')!);
      return loadedCities;
    } else {
      console.log('No weather items in local storage');
      return this.defaultCities;
    }
  }

  removeLocation(cityName: string) {
    let cities = this.getSavedLocations();
    if (cities.includes(cityName)) {
      cities.splice(cities.indexOf(cityName), 1);
      this.saveLocationsToLocalStorage(cities);
    } else {
      console.log(cityName, 'not found in', cities);
    }
    //TODO remove selected city/position from array
    //this.saveLocationsToLocalStorage(cities)
  }
}
