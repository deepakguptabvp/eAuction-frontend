import { TestBed } from '@angular/core/testing';

import { BuyerLoginService } from './buyer-login.service';

describe('BuyerLoginService', () => {
  let service: BuyerLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyerLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
