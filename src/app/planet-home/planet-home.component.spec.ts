import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetHomeComponent } from './planet-home.component';

describe('PlanetHomeComponent', () => {
  let component: PlanetHomeComponent;
  let fixture: ComponentFixture<PlanetHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanetHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
