import { StaticFilesPage } from './app.po';

describe('static-files App', () => {
  let page: StaticFilesPage;

  beforeEach(() => {
    page = new StaticFilesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
