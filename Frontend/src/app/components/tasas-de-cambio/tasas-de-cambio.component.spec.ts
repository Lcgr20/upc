import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasasDeCambioComponent } from './tasas-de-cambio.component';

describe('TasasDeCambioComponent', () => {
  let component: TasasDeCambioComponent;
  let fixture: ComponentFixture<TasasDeCambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasasDeCambioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasasDeCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
