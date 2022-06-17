import { TestBed } from '@angular/core/testing';

import { InvitationcodeService } from './invitationcode.service';

describe('InvitationcodeService', () => {
  let service: InvitationcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvitationcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
