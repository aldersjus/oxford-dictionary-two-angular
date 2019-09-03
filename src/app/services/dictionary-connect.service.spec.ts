import { TestBed } from '@angular/core/testing';

import { DictionaryConnectService } from './dictionary-connect.service';

describe('DictionaryConnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DictionaryConnectService = TestBed.get(DictionaryConnectService);
    expect(service).toBeTruthy();
  });
});
