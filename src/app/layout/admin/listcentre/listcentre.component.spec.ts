import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcentreComponent } from './listcentre.component';

describe('ListcentreComponent', () => {
  let component: ListcentreComponent;
  let fixture: ComponentFixture<ListcentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
