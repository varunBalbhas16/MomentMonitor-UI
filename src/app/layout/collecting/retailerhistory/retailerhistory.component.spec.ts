import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerhistoryComponent } from './retailerhistory.component';

describe('RetailerhistoryComponent', () => {
  let component: RetailerhistoryComponent;
  let fixture: ComponentFixture<RetailerhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
