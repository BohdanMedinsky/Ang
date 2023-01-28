import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCarComponent } from './big-car.component';

describe('BigCarComponent', () => {
  let component: BigCarComponent;
  let fixture: ComponentFixture<BigCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
