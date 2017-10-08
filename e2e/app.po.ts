import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getCreateCourseHeader() {
    return element(by.css('app-create-course div div h2')).getText();
  }
}
