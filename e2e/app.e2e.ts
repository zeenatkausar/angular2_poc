import { PocAngular2Page } from './app.po';

describe('poc-angular2 App', function() {
  let page: PocAngular2Page;

  beforeEach(() => {
    page = new PocAngular2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('poc-angular2 works!');
  });
});
