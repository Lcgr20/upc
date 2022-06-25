import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPaso1Component } from './no-paso1.component';

describe('NoPaso1Component', () => {
  let component: NoPaso1Component;
  let fixture: ComponentFixture<NoPaso1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPaso1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPaso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
