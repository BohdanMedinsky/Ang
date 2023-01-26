import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigAirComponent } from './big-air.component';

describe('BigAirComponent', () => {
  let component: BigAirComponent;
  let fixture: ComponentFixture<BigAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigAirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
