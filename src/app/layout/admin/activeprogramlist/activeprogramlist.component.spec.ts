import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveprogramlistComponent } from './activeprogramlist.component';

describe('ActiveprogramlistComponent', () => {
  let component: ActiveprogramlistComponent;
  let fixture: ComponentFixture<ActiveprogramlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveprogramlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveprogramlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
