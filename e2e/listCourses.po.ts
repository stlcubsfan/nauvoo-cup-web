import { browser, by, element } from 'protractor';

export class ListCoursesPage {
  navigateTo() {
    return browser.get('/courses');
  }

  getCreateCourseHeader() {
    return element(by.css('.courses-banner h2')).getText();
  }
}
