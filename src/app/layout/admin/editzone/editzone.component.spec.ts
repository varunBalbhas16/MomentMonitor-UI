import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditzoneComponent } from './editzone.component';

describe('EditzoneComponent', () => {
  let component: EditzoneComponent;
  let fixture: ComponentFixture<EditzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
