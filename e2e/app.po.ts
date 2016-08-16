export class PocAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('poc-angular2-app h1')).getText();
  }
}
