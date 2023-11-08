import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerPocComponent } from './timer-poc.component';

describe('TimerPocComponent', () => {
  let component: TimerPocComponent;
  let fixture: ComponentFixture<TimerPocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerPocComponent]
    });
    fixture = TestBed.createComponent(TimerPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
