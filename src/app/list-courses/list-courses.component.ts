import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../shared/course.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.listCourses()
      .subscribe(data => 
        this.courses = data,
      );
  }

}
