import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPaso2Component } from './no-paso2.component';

describe('NoPaso2Component', () => {
  let component: NoPaso2Component;
  let fixture: ComponentFixture<NoPaso2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPaso2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPaso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
