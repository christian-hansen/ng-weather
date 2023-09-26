import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSliderItemComponent } from './location-slider-item.component';

describe('LocationSliderItemComponent', () => {
  let component: LocationSliderItemComponent;
  let fixture: ComponentFixture<LocationSliderItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationSliderItemComponent]
    });
    fixture = TestBed.createComponent(LocationSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
