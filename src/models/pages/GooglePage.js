import {BasePage} from './BasePage';

require('chai').should();

export class GooglePage extends BasePage{

  static launchGoogle() {
    super.launchBrowserUrl('');
    super.pause(2);
  }

  static async verifyTitle(expectedTitle) {
    await super.getTitle().should.equal(expectedTitle);
  }
}
