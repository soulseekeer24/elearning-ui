import { TestBed } from '@angular/core/testing';

import { PlatziScrapperService } from './platzi-scrapper.service';

describe('PlatziScrapperService', () => {
  let service: PlatziScrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatziScrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
