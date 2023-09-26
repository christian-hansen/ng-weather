import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-location-tile',
  templateUrl: './location-tile.component.html',
  styleUrls: ['./location-tile.component.scss']
})
export class LocationTileComponent {
@Input() location!: string;
weather!: any;
  locationName!: string;
  currentTemp!: number;
  tempMin!: number;
  tempMax!: number;
  humidity!: number;
  windSpeed!: number;
  weatherConditions!: string;
  weatherIcon!: string;
  @Output() deleteRequested = new EventEmitter();

constructor(private weatherservice: WeatherService) {}

ngOnInit(): void {
  this.getWeatherData(this.location);
  this.getForecastData(this.location);
}

removeLocation(locationName: string) {
  this.deleteRequested.emit(locationName);  
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
    },

    error: (error) => console.warn(error.message),

    complete: () => console.info('API Forecast call completed'),
  });
}

}
