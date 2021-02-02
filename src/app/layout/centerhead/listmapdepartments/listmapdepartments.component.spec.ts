import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmapdepartmentsComponent } from './listmapdepartments.component';

describe('ListmapdepartmentsComponent', () => {
  let component: ListmapdepartmentsComponent;
  let fixture: ComponentFixture<ListmapdepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmapdepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmapdepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
