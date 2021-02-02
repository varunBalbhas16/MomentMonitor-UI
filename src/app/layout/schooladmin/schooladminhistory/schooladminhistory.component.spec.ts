import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooladminhistoryComponent } from './schooladminhistory.component';

describe('SchooladminhistoryComponent', () => {
  let component: SchooladminhistoryComponent;
  let fixture: ComponentFixture<SchooladminhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchooladminhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchooladminhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
