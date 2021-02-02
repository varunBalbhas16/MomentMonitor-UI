import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddepartmentComponent } from './adddepartment.component';

describe('EditdepartmentComponent', () => {
  let component: AdddepartmentComponent;
  let fixture: ComponentFixture<AdddepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
