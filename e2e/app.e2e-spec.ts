import { AppPage } from './app.po';

describe('nauvoo-cup-web App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('should display create course', () => {
    expect(page.getCreateCourseHeader()).toEqual('Create a Course');
  });
});
