import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  cities: Array<string> = ['Meerbusch', 'New York', 'Sydney', 'Tokyo']

  location: string = '';

  constructor(private weatherservice: WeatherService) {}

  ngOnInit(): void {
    this.getSavedLocations();
    // this.getWeatherData(this.city);
    // this.getForecastData(this.city);
    this.location = '';
  }

  onSubmit() {
    // this.getWeatherData(this.city);
    // this.getForecastData(this.city);
    this.location = '';
  }

  getSavedLocations() {
    //getitems from localstorage
    //add items to locations array
    console.log("Load Cities from Local Storage");
    
  }
}
