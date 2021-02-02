import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapdepartmentComponent } from './mapdepartment.component';

describe('EditdepartmentComponent', () => {
  let component: MapdepartmentComponent;
  let fixture: ComponentFixture<MapdepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapdepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
