import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { RouterTestingModule } from '@angular/router/testing';
import { ListCoursesComponent } from './list-courses.component';
import { CourseService } from '../shared/course.service';
import { ApiService } from '../shared/api.service';
import { Course } from '../models/course';

describe('ListCoursesComponent', () => {
  let component: ListCoursesComponent;
  let fixture: ComponentFixture<ListCoursesComponent>;
  let apiServiceStub = {
  };
  let courseService: CourseService;
  let courseList: Course[] = [];
  let course1: Course = new Course();
  course1.name = "Test Course";
  courseList.push(course1);    

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoursesComponent ],
      imports: [RouterTestingModule],
      providers: [CourseService, {provide: ApiService, useValue: apiServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoursesComponent);
    component = fixture.componentInstance;
    courseService = TestBed.get(CourseService);
    spyOn(courseService, 'listCourses').and.returnValue(Observable.of(courseList));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit to load courses', async(() => {
    
    fixture.whenStable().then( () => {
      fixture.detectChanges();
      expect(component.courses).toEqual(courseList);
    });
    component.ngOnInit();
  }));
});
