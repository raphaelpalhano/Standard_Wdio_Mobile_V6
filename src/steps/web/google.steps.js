import {Given, Then} from 'cucumber';

import {GooglePage} from '../../models/pages/GooglePage';


Given(/^I launch the google$/, () => {
  GooglePage.launchGoogle();
});

Then(/^I verify the title to be (.*)$/, (title) => {
  GooglePage.verifyTitle(title);
});
