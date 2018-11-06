import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TendPlanetComponent } from './tend-planet.component';

describe('TendPlanetComponent', () => {
  let component: TendPlanetComponent;
  let fixture: ComponentFixture<TendPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TendPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TendPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
