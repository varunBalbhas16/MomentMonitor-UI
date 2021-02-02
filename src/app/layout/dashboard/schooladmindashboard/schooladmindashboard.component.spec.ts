import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooladmindashboardComponent } from './schooladmindashboard.component';

describe('SchooladmindashboardComponent', () => {
  let component: SchooladmindashboardComponent;
  let fixture: ComponentFixture<SchooladmindashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchooladmindashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchooladmindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
