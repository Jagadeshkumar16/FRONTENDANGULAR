import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetRegComponent } from './planet-reg.component';

describe('PlanetRegComponent', () => {
  let component: PlanetRegComponent;
  let fixture: ComponentFixture<PlanetRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanetRegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
