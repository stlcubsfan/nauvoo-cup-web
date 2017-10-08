import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { ApiService } from './shared/api.service';
import { CourseService } from './shared/course.service';
import { AppComponent } from './app.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { ZipCodeValidationDirective } from './zip-code-validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateCourseComponent,
    ZipCodeValidationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule
  ],
  providers: [ApiService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
