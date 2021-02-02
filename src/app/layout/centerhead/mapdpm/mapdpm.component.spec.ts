import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapdpmComponent } from './mapdpm.component';

describe('EditdepartmentComponent', () => {
  let component: MapdpmComponent;
  let fixture: ComponentFixture<MapdpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapdpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapdpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
