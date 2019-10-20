import { TestBed } from '@angular/core/testing';

import { NgximagedisplayService } from './ngximagedisplay.service';

describe('NgximagedisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgximagedisplayService = TestBed.get(NgximagedisplayService);
    expect(service).toBeTruthy();
  });
});
