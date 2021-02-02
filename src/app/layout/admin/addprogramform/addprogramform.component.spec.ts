import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprogramformComponent } from './addprogramform.component';

describe('AddprogramformComponent', () => {
  let component: AddprogramformComponent;
  let fixture: ComponentFixture<AddprogramformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprogramformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprogramformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
