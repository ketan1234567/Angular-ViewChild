import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchParentComponent } from './stopwatch-parent.component';

describe('StopwatchParentComponent', () => {
  let component: StopwatchParentComponent;
  let fixture: ComponentFixture<StopwatchParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StopwatchParentComponent]
    });
    fixture = TestBed.createComponent(StopwatchParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
