import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddzoneComponent } from './addzone.component';

describe('EditzoneComponent', () => {
  let component: AddzoneComponent;
  let fixture: ComponentFixture<AddzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
