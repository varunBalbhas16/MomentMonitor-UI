import { TestBed } from '@angular/core/testing';

import { SchooladminService } from './schooladmin.service';

describe('SchooladminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchooladminService = TestBed.get(SchooladminService);
    expect(service).toBeTruthy();
  });
});
