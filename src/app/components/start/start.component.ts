import { Component, Input, ViewChild } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { LocationTileComponent } from '../location-tile/location-tile.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  // cities: Array<string> = ['Meerbusch', 'Domburg', 'New York', 'Sydney', 'Tokyo']
  cities: Array<string> = [];
  cityName!: string;
  location: string = '';
  errorMessage!: string;
  weather: any;
  isDialogActive: boolean = false;
  locationToDelete!: string;

  constructor(private weatherservice: WeatherService) {}

  ngOnInit(): void {
    this.cities = this.weatherservice.getSavedLocations();
    if (this.cities.length === 0) {
      this.errorMessage = 'You have not picked a location yet';
    }
  }

  showDeleteDialog(cityName: string): void {
    this.locationToDelete = cityName;
    this.isDialogActive = true;
  }

  closeDialog(): void {
    this.isDialogActive = false;
  }

  removeLocation() {
    let locationName = this.locationToDelete;
    this.weatherservice.removeLocation(locationName);
    this.isDialogActive = false;
    this.cities = this.weatherservice.getSavedLocations();
  }

  onSubmit() {
    this.formatLocation(this.location);
    this.weatherservice.checkWeatherData(this.location).subscribe({
      next: (weather) => {
        this.weather = weather;
        if (!this.cities.includes(this.weather.name)) {
          this.cities.push(this.weather.name);
          this.weatherservice.saveLocationsToLocalStorage(this.cities);
          this.errorMessage = '';
        } else {
          this.errorMessage =
            this.weather.name + ' is already included in your locations. Please select another city';
        }
      },
      error: (error) => {
        if (error.status === 404) {
          this.errorMessage = 'City not found. Please try again.';
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      },
    });
    this.location = '';
  }

  formatLocation(input: string) {
    let string = this.location;
    const arr = string.split(' ');
    arr.forEach((item, index) => {
      arr[index] = item.charAt(0).toUpperCase() + item.slice(1);
    });
    this.location = arr.join(' ');
  }
}
