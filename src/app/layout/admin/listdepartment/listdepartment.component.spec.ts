import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdepartmentComponent } from './listdepartment.component';

describe('ListdepartmentComponent', () => {
  let component: ListdepartmentComponent;
  let fixture: ComponentFixture<ListdepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
