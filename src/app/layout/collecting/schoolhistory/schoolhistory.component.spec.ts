import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolhistoryComponent } from './schoolhistory.component';

describe('SchoolhistoryComponent', () => {
  let component: SchoolhistoryComponent;
  let fixture: ComponentFixture<SchoolhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
