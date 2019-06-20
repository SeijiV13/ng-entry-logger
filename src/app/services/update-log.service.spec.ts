import { TestBed } from '@angular/core/testing';

import { UpdateLogService } from './update-log.service';

describe('UpdateLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateLogService = TestBed.get(UpdateLogService);
    expect(service).toBeTruthy();
  });
});
