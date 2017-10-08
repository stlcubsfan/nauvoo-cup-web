import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let http = {};
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, {provide: Http, useValue: http}]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
