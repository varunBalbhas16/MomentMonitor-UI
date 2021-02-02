import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorbatchdetailsComponent } from './supervisorbatchdetails.component';

describe('SupervisorbatchdetailsComponent', () => {
  let component: SupervisorbatchdetailsComponent;
  let fixture: ComponentFixture<SupervisorbatchdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorbatchdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorbatchdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
