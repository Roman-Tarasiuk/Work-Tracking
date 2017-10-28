import { WorkTrackingPage } from './app.po';

describe('work-tracking App', () => {
  let page: WorkTrackingPage;

  beforeEach(() => {
    page = new WorkTrackingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
