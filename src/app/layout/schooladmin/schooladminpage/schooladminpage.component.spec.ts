import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooladminpageComponent } from './schooladminpage.component';

describe('SchooladminpageComponent', () => {
  let component: SchooladminpageComponent;
  let fixture: ComponentFixture<SchooladminpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchooladminpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchooladminpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
