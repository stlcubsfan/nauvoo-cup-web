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
  saveErrored: boolean = false;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  newCourse() {
    this.course = new Course();
  }

  saveCourse() {
    this.saveErrored = true;
    this.courseService.saveCourse(this.course)
    .subscribe(
      data => {
        this.course = new Course();
      },
      err => {
        this.saveErrored = true;
      }
    )
  }
}
