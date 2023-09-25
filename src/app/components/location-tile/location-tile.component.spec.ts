import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTileComponent } from './location-tile.component';

describe('TileLocationComponent', () => {
  let component: LocationTileComponent;
  let fixture: ComponentFixture<LocationTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationTileComponent]
    });
    fixture = TestBed.createComponent(LocationTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
