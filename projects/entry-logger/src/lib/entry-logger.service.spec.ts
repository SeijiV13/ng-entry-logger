import { TestBed } from '@angular/core/testing';

import { EntryLoggerService } from './entry-logger.service';

describe('EntryLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntryLoggerService = TestBed.get(EntryLoggerService);
    expect(service).toBeTruthy();
  });
});
