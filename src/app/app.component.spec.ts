import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CourseService } from './shared/course.service';
import { TopNavComponent } from './top-nav/top-nav.component';

describe('AppComponent', () => {
  let courseServiceStub = {

  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, CreateCourseComponent, TopNavComponent
      ], imports: [ FormsModule, RouterTestingModule ],
      providers: [{provide: CourseService, useValue: courseServiceStub}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

});
