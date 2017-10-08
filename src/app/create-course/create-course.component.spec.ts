import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';

import { CreateCourseComponent } from './create-course.component';
import { CourseService } from '../shared/course.service';

describe('CreateCourseComponent', () => {
  let component: CreateCourseComponent;
  let fixture: ComponentFixture<CreateCourseComponent>;
  let courseServiceStub = {

  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCourseComponent ],
      imports: [FormsModule],
      providers: [ {provide: CourseService, useValue: courseServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('newCourse', () => {
    it('should create blank course', () => {
      component.newCourse();
      expect(component.course).toBeDefined();
      expect(component.course.name).toBeUndefined();
    });
  });
});
