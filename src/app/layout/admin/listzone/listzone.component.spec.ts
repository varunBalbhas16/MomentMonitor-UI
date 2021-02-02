import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListzoneComponent } from './listzone.component';

describe('ListcentreComponent', () => {
  let component: ListzoneComponent;
  let fixture: ComponentFixture<ListzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
