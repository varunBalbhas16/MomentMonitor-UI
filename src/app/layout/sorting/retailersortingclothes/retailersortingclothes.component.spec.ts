import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailersortingclothesComponent } from './retailersortingclothes.component';

describe('RetailersortingclothesComponent', () => {
  let component: RetailersortingclothesComponent;
  let fixture: ComponentFixture<RetailersortingclothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailersortingclothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailersortingclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
