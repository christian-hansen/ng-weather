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

  currentTimeHours!: number;
  foreCastIndex!: number;
  locationNameLowerCase!: string;

  forecast!: any;
  forecastList!: any;
  sixteenDaysForecast!: any;
  sixteenDaysForecastList!: any;
  constructor(private weatherservice: WeatherService, private router: ActivatedRoute) {
    this.router.url.subscribe((result) => (this.location = result[0].path));
  }

  ngOnInit(): void {
    console.log(this.location);
    this.getWeatherData(this.location);
    this.getForecastData(this.location);
    this.getCurrentTime();
    this.foreCastIndex = this.setForeCastIndexBasedOnTimeHours();
    console.log("this.currentTimeHours", this.currentTimeHours, "this.foreCastIndex", this.foreCastIndex);      
  }

  private getWeatherData(cityName: string) {
    this.weatherservice.getWeatherData(cityName).subscribe({
      next: (weather) => {
        // console.log('Weather', weather);
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
        // console.log('Forecast', forecast);
        this.forecast = forecast;
        this.forecastList = this.forecast.list;
        // console.log(this.forecastList);
      },

      error: (error) => console.warn(error.message),

      complete: () => console.info('API Forecast call completed'),
    });
  }

  getCurrentTime() {
    let now = new Date();
    this.currentTimeHours = now.getHours();
  }

  setForeCastIndexBasedOnTimeHours() {
    if (0 <= this.currentTimeHours && this.currentTimeHours < 3) {
      return 13;
    } else if (3 <= this.currentTimeHours && this.currentTimeHours < 6) {
      return 12;
    } else if (6 <= this.currentTimeHours && this.currentTimeHours < 9) {
      return 11;
    } else if (9 <= this.currentTimeHours && this.currentTimeHours < 12) {
      return 10;
    } else if (12 <= this.currentTimeHours && this.currentTimeHours < 15) {
      return 9;
    } else if (15 <= this.currentTimeHours && this.currentTimeHours < 18) {
      return 8;
    } else if (18 <= this.currentTimeHours && this.currentTimeHours < 21) {
      return 7;
    } else {return 6};
    }
}
