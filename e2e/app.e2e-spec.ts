import { AppPage } from './app.po';

describe('nauvoo-cup-web App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  xit('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

});
