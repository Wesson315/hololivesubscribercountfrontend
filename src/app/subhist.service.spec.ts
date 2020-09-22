import { TestBed } from '@angular/core/testing';

import { SubhistService } from './subhist.service';

describe('SubhistServiceService', () => {
  let service: SubhistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubhistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
