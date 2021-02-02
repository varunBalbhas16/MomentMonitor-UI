import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerlistComponent } from './retailerlist.component';

describe('ListmapdepartmentsComponent', () => {
  let component: RetailerlistComponent;
  let fixture: ComponentFixture<RetailerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
