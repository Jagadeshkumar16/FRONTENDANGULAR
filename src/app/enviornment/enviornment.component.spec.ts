import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviornmentComponent } from './enviornment.component';

describe('EnviornmentComponent', () => {
  let component: EnviornmentComponent;
  let fixture: ComponentFixture<EnviornmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnviornmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnviornmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
