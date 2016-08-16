import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PocAngular2AppComponent } from '../app/poc-angular2.component';

beforeEachProviders(() => [PocAngular2AppComponent]);

describe('App: PocAngular2', () => {
  it('should create the app',
      inject([PocAngular2AppComponent], (app: PocAngular2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'poc-angular2 works!\'',
      inject([PocAngular2AppComponent], (app: PocAngular2AppComponent) => {
    expect(app.title).toEqual('poc-angular2 works!');
  }));
});
