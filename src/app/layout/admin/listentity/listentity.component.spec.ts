import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListentityComponent } from './listentity.component';

describe('ListentityComponent', () => {
  let component: ListentityComponent;
  let fixture: ComponentFixture<ListentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
