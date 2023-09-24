import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
units?: string = 'metric';
limit?: number = 1;

  constructor(private http:HttpClient) {}

getWeatherData(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${environment.units}&limit=${environment.limit}&lang=en&appid=${environment.API_KEY}`)
}

getForecastData(city: string) {
  return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${environment.units}&limit=${environment.limit}&lang=en&appid=${environment.API_KEY}`)
}

}