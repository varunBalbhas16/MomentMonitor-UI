import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorpageComponent } from './supervisorpage.component';

describe('SupervisorpageComponent', () => {
  let component: SupervisorpageComponent;
  let fixture: ComponentFixture<SupervisorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
