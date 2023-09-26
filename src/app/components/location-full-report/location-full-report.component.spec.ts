import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationFullReportComponent } from './location-full-report.component';

describe('LocationFullReportComponent', () => {
  let component: LocationFullReportComponent;
  let fixture: ComponentFixture<LocationFullReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationFullReportComponent]
    });
    fixture = TestBed.createComponent(LocationFullReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
