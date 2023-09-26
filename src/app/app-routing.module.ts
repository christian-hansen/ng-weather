import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { LocationFullReportComponent } from './components/location-full-report/location-full-report.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {path: "", component: StartComponent},
  {path: ":city", component: LocationDetailComponent},
  {path: ":city/full", component: LocationFullReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
