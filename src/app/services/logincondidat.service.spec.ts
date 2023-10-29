import { TestBed } from '@angular/core/testing';

import { LogincondidatService } from './logincondidat.service';

describe('LogincondidatService', () => {
  let service: LogincondidatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogincondidatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
