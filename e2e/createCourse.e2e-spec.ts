import { CreateCoursePage } from './createCourse.po';

describe('nauvoo-cup-web CreateCourse', () => {
  let page: CreateCoursePage;

  beforeEach(() => {
    page = new CreateCoursePage();
  });

  it('should display create course', () => {
    page.navigateTo();
    expect(page.getCreateCourseHeader()).toEqual('Create a Course');
  });

  it('should display welcome message', () => {
    page.getCourseNameInput().sendKeys('Course Name');
    expect(page.getCourseNameInput().getAttribute('value')).toBe('Course Name');
  });

  it('should display a warning if the zip code is invalid format', () => {
    page.getZipCodeInput().sendKeys('1234');
    expect(page.getZipCodeValidation().getText()).toBe('Zip Code must be in the proper format (5 or 9 digts)');
  })
});
