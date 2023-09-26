import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-location-full-report',
  templateUrl: './location-full-report.component.html',
  styleUrls: ['./location-full-report.component.scss'],
})
export class LocationFullReportComponent {
  location!: string;
  weather!: any;
  locationName!: string;
  currentTemp!: number;
  tempMin!: number;
  tempMax!: number;
  humidity!: number;
  windSpeed!: number;
  weatherConditions!: string;
  weatherIcon!: string;

  forecast!: any;
  forecastList!: any;
  constructor(private weatherservice: WeatherService, private router: ActivatedRoute) {
    this.router.url.subscribe((result) => (this.location = result[0].path));
  }

  ngOnInit(): void {
    console.log(this.location);
    this.getWeatherData(this.location);
    this.getForecastData(this.location);
  }

  private getWeatherData(cityName: string) {
    this.weatherservice.getWeatherData(cityName).subscribe({
      next: (weather) => {
        console.log('Weather', weather);

        this.weather = weather;
        this.locationName = this.weather.name;
        this.currentTemp = this.weather.main.temp;
        this.tempMin = this.weather.main.temp_min;
        this.tempMax = this.weather.main.temp_max;
        this.humidity = this.weather.main.humidity;
        this.windSpeed = this.weather.wind.speed;
        this.weatherConditions = this.weather.weather[0].main;
        this.weatherIcon = this.weather.weather[0].icon;
      },

      error: (error) => console.warn(error.message),

      complete: () => console.info('API call completed'),
    });
  }

  private getForecastData(cityName: string) {
    this.weatherservice.getForecastData(cityName).subscribe({
      next: (forecast) => {
        console.log('Forecast', forecast);
        this.forecast = forecast;
        this.forecastList = this.forecast.list;
        console.log(this.forecastList);
      },

      error: (error) => console.warn(error.message),

      complete: () => console.info('API Forecast call completed'),
    });
  }
}
