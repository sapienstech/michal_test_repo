import { MichalTestAppPage } from './app.po';

describe('michal-test-app App', function() {
  let page: MichalTestAppPage;

  beforeEach(() => {
    page = new MichalTestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
