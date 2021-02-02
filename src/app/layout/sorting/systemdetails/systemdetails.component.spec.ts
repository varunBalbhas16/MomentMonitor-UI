import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemdetailsComponent } from './systemdetails.component';

describe('SystemdetailsComponent', () => {
  let component: SystemdetailsComponent;
  let fixture: ComponentFixture<SystemdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
