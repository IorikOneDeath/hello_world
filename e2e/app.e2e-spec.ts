import { Angular2helloworldPage } from './app.po';

describe('angular2helloworld App', function() {
  let page: Angular2helloworldPage;

  beforeEach(() => {
    page = new Angular2helloworldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
