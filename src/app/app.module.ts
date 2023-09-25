import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { LocationTileComponent } from './components/location-tile/location-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LocationTileComponent,
    LocationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
