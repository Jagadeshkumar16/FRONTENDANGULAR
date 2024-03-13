import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetLoginComponent } from './planet-login.component';

describe('PlanetLoginComponent', () => {
  let component: PlanetLoginComponent;
  let fixture: ComponentFixture<PlanetLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanetLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
