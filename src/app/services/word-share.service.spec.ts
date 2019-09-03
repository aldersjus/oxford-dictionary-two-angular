import { TestBed } from '@angular/core/testing';

import { WordShareService } from './word-share.service';

describe('WordShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordShareService = TestBed.get(WordShareService);
    expect(service).toBeTruthy();
  });
});
