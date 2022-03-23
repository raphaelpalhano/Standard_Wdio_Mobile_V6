import {BasePage} from './BasePage';

require('chai').should();

export class GooglePage extends BasePage{

  static launchGoogle() {
    super.launchBrowserUrl('');
    super.pause(2);
  }

  static verifyTitle(expectedTitle) {
    super.getTitle().should.equal(expectedTitle);
  }
}
