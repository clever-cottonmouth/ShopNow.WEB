import { TestBed } from '@angular/core/testing';

import { CottonMouthFormService } from './cotton-mouth-form.service';

describe('CottonMouthFormService', () => {
  let service: CottonMouthFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CottonMouthFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
