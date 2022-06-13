import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialOperacionesComponent } from './historial-operaciones.component';

describe('HistorialOperacionesComponent', () => {
  let component: HistorialOperacionesComponent;
  let fixture: ComponentFixture<HistorialOperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialOperacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
