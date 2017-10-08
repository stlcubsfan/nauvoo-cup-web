import { TestBed, inject } from '@angular/core/testing';
import { ApiService } from './api.service';
import { CourseService } from './course.service';

describe('CourseService', () => {
  let apiService = {};
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseService, {provide: ApiService, useValue: apiService}]
    });
  });

  it('should be created', inject([CourseService], (service: CourseService) => {
    expect(service).toBeTruthy();
  }));
});
