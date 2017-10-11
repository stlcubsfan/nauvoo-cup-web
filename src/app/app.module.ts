import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { ApiService } from './shared/api.service';
import { CourseService } from './shared/course.service';
import { AppComponent } from './app.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { ZipCodeValidationDirective } from './zip-code-validation.directive';
import { TopNavComponent } from './top-nav/top-nav.component';

const appRoutes: Routes = [
  {
    path: 'courses',
    component: CreateCourseComponent
  }, {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateCourseComponent,
    ZipCodeValidationDirective,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ApiService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
