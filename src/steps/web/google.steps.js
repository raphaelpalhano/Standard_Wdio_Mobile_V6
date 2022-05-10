import { Given, Then } from 'cucumber';
import {GooglePage} from '../../pageobject/pages/GooglePage';


Given(/^I launch the google$/, async () => {
  await GooglePage.launchGoogle();
});

Then(/^I verify the title to be (.*)$/, async (title) => {
  await GooglePage.verifyTitle(title);
});
