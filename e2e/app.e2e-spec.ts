import { DinnerAppPage } from './app.po';

describe('dinner-app App', function() {
  let page: DinnerAppPage;

  beforeEach(() => {
    page = new DinnerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
