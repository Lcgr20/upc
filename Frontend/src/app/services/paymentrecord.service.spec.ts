import { TestBed } from '@angular/core/testing';

import { PaymentrecordService } from './paymentrecord.service';

describe('PaymentrecordService', () => {
  let service: PaymentrecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentrecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
