import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCarrsComponent } from './big-carrs.component';

describe('BigCarrsComponent', () => {
  let component: BigCarrsComponent;
  let fixture: ComponentFixture<BigCarrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCarrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigCarrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
