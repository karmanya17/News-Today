import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathernavComponent } from './weathernav.component';

describe('WeathernavComponent', () => {
  let component: WeathernavComponent;
  let fixture: ComponentFixture<WeathernavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeathernavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
