import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../shared/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  course: Course = new Course();

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  newCourse() {
    this.course = new Course();
  }

  saveCourse() {
    this.courseService.saveCourse(this.course)
    .subscribe(
      data => {
        this.course = new Course();
        console.log(data);
      },
      err => {
        console.log(err);
      }
    )
  }
}
