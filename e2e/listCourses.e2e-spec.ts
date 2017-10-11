import { ListCoursesPage } from './listCourses.po';

describe('List courses page', () => {
  let page: ListCoursesPage;

  beforeEach(() => {
    page = new ListCoursesPage();
  });

  it('should display course list', () => {
    page.navigateTo();
    expect(page.getCreateCourseHeader()).toEqual('Courses');
  });
});
