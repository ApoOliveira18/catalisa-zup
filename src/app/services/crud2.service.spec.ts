import { TestBed } from '@angular/core/testing';

import { Crud2.Service.TsService } from './crud2.service.ts.service';

describe('Crud2.Service.TsService', () => {
  let service: Crud2.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Crud2.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
