import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldtriplistComponent } from './fieldtriplist.component';

describe('AttendancelistComponent', () => {
  let component: FieldtriplistComponent;
  let fixture: ComponentFixture<FieldtriplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldtriplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldtriplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
