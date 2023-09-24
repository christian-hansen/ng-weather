import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  weather!: any;
  cityName!: string;
  currentTemp!: number;
  tempMin!: number;
  tempMax!: number;
  humidity!: number;
  windSpeed!: number;

  city: string = 'Meerbusch';

  constructor(private weatherservice: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.getForecastData(this.city);
    this.city = '';
  }

  onSubmit() {
    this.getWeatherData(this.city);
    this.getForecastData(this.city);
    this.city = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherservice.getWeatherData(cityName).subscribe({
      next: (weather) => {
        console.log('Weather', weather);

        this.weather = weather;
        this.cityName = this.weather.name;
        this.currentTemp = this.weather.main.temp;
        this.tempMin = this.weather.main.temp_min;
        this.tempMax = this.weather.main.temp_max;
        this.humidity = this.weather.main.humidity;
        this.windSpeed = this.weather.wind.speed;
      },

      error: (error) => console.warn(error.message),

      complete: () => console.info('API call completed'),
    });
  }

  private getForecastData(cityName: string) {
    this.weatherservice.getForecastData(cityName).subscribe({
      next: (forecast) => {
        console.log('Forecast', forecast);
      },

      error: (error) => console.warn(error.message),

      complete: () => console.info('API Forecast call completed'),
    });
  }
}
