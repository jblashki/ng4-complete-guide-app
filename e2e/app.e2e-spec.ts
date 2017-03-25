import { Ng4CompleteGuideAppPage } from './app.po';

describe('ng4-complete-guide-app App', () => {
  let page: Ng4CompleteGuideAppPage;

  beforeEach(() => {
    page = new Ng4CompleteGuideAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
