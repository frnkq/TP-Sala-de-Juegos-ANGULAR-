import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastFingersComponent } from './fast-fingers.component';

describe('FastFingersComponent', () => {
  let component: FastFingersComponent;
  let fixture: ComponentFixture<FastFingersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastFingersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastFingersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
