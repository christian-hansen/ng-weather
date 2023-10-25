import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-slider-item',
  templateUrl: './location-slider-item.component.html',
  styleUrls: ['./location-slider-item.component.scss']
})
export class LocationSliderItemComponent {
@Input() data: any;
time!: number;
weatherIcon!: string;
temp!: number;

ngOnInit(): void {
  // console.log(this.data);
  this.time = this.data.dt * 1000;
  this.temp = this.data.main.temp;
  this.weatherIcon = this.data.weather[0].icon;
}



}

