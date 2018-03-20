import { HerosDemoPage } from './app.po';

describe('heros-demo App', function() {
  let page: HerosDemoPage;

  beforeEach(() => {
    page = new HerosDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
