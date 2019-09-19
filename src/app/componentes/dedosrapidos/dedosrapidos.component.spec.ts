import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DedosrapidosComponent } from './dedosrapidos.component';

describe('DedosrapidosComponent', () => {
  let component: DedosrapidosComponent;
  let fixture: ComponentFixture<DedosrapidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DedosrapidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DedosrapidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
