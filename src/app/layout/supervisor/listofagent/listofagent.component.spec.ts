import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofagentComponent } from './listofagent.component';

describe('ListofagentComponent', () => {
  let component: ListofagentComponent;
  let fixture: ComponentFixture<ListofagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
