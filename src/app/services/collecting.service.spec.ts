import { TestBed } from '@angular/core/testing';

import { CollectingService } from './collecting.service';

describe('CollectingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollectingService = TestBed.get(CollectingService);
    expect(service).toBeTruthy();
  });
});
