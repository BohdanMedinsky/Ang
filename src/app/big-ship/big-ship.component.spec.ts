import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigShipComponent } from './big-ship.component';

describe('BigShipComponent', () => {
  let component: BigShipComponent;
  let fixture: ComponentFixture<BigShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigShipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
