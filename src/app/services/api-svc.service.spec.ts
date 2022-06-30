import { TestBed } from '@angular/core/testing';

import { ApiSvcService } from './api-svc.service';

describe('ApiSvcService', () => {
  let service: ApiSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
