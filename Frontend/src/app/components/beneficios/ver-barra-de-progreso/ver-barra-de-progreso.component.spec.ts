import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBarraDeProgresoComponent } from './ver-barra-de-progreso.component';

describe('VerBarraDeProgresoComponent', () => {
  let component: VerBarraDeProgresoComponent;
  let fixture: ComponentFixture<VerBarraDeProgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerBarraDeProgresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerBarraDeProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
