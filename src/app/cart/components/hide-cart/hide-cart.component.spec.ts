import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideCartComponent } from './hide-cart.component';

describe('HideCartComponent', () => {
  let component: HideCartComponent;
  let fixture: ComponentFixture<HideCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HideCartComponent]
    });
    fixture = TestBed.createComponent(HideCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
