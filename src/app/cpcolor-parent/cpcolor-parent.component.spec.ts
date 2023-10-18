import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpcolorParentComponent } from './cpcolor-parent.component';

describe('CpcolorParentComponent', () => {
  let component: CpcolorParentComponent;
  let fixture: ComponentFixture<CpcolorParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpcolorParentComponent]
    });
    fixture = TestBed.createComponent(CpcolorParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
