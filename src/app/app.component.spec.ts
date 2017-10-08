import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CourseService } from './shared/course.service';

describe('AppComponent', () => {
  let courseServiceStub = {

  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, CreateCourseComponent
      ], imports: [ FormsModule ],
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
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
