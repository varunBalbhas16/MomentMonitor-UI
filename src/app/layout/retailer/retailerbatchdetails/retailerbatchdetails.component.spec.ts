import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerbatchdetailsComponent } from './retailerbatchdetails.component';

describe('RetailerbatchdetailsComponent', () => {
  let component: RetailerbatchdetailsComponent;
  let fixture: ComponentFixture<RetailerbatchdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerbatchdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerbatchdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
