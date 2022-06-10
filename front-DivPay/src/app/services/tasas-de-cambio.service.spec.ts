import { TestBed } from '@angular/core/testing';

import { TasasDeCambioService } from './tasas-de-cambio.service';

describe('TasasDeCambioService', () => {
  let service: TasasDeCambioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasasDeCambioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
