import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileLocationComponent } from './tile-location.component';

describe('TileLocationComponent', () => {
  let component: TileLocationComponent;
  let fixture: ComponentFixture<TileLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TileLocationComponent]
    });
    fixture = TestBed.createComponent(TileLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
