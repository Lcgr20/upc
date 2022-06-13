import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBeneficiosComponent } from './ver-beneficios.component';

describe('VerBeneficiosComponent', () => {
  let component: VerBeneficiosComponent;
  let fixture: ComponentFixture<VerBeneficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerBeneficiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
