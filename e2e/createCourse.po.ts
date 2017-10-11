import { browser, by, element } from 'protractor';

export class CreateCoursePage {
  navigateTo() {
    return browser.get('/courses/new');
  }

  getCreateCourseHeader() {
    return element(by.css('.courses-banner h2')).getText();
  }

  getCourseNameInput() {
    return element(by.id('name'));
  }

  getZipCodeInput() {
    return element(by.id('zipCode'));
  }

  getZipCodeValidation() {
    return element(by.id('zipCodeValidation'));
  }
}
