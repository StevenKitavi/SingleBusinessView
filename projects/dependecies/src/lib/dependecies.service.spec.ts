import { TestBed } from '@angular/core/testing';

import { DEPENDECIESService } from './dependecies.service';

describe('DEPENDECIESService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DEPENDECIESService = TestBed.get(DEPENDECIESService);
    expect(service).toBeTruthy();
  });
});
