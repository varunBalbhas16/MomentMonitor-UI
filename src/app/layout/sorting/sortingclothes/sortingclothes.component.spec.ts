import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingclothesComponent } from './sortingclothes.component';

describe('SortingclothesComponent', () => {
  let component: SortingclothesComponent;
  let fixture: ComponentFixture<SortingclothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingclothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
