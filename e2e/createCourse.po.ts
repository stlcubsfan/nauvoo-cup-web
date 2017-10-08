import { browser, by, element } from 'protractor';

export class CreateCoursePage {
  navigateTo() {
    return browser.get('/courses');
  }

  getCreateCourseHeader() {
    return element(by.css('app-create-course div div h2')).getText();
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
