import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPaso3Component } from './no-paso3.component';

describe('NoPaso3Component', () => {
  let component: NoPaso3Component;
  let fixture: ComponentFixture<NoPaso3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPaso3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPaso3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
