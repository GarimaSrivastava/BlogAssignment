import { TestBed, inject } from '@angular/core/testing';

import { MyblogService } from './myblog.service';

describe('MyblogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyblogService]
    });
  });

  it('should be created', inject([MyblogService], (service: MyblogService) => {
    expect(service).toBeTruthy();
  }));
});
