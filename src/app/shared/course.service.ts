import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Course } from '../models/course';

@Injectable()
export class CourseService {

  constructor(private apiService: ApiService) { }

  saveCourse(course): Observable<Course> {
    if (course.id) {

    } else {
      return this.apiService.post('/courses', course)
        .map(data => data);
    }
  }
}
