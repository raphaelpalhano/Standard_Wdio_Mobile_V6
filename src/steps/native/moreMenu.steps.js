import { expect } from 'chai';
import { Given, Then } from 'cucumber';
import { MenuBar } from '../../pageobject/screens/MenuBar';
import { MoreMenuScreen } from '../../pageobject/screens/MoreMenuScreen';

const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

Given('que acessa a tela de login', async () => {
  const element = await (await ScreenManagerMobile.moreElements.ENTERBUTTON()).isDisplayed();
  if(!element){
    await MoreMenuScreen.exitButton();
    await MenuBar.sleepForMoreTabDisplay(4.40);
    await MenuBar.goToMoreTab();
    await MoreMenuScreen.enterButton();
  }
  if(element){
    await MoreMenuScreen.enterButton();
  }


});


Then(`deve exibir a mensagem {string}`, async (message) => {
  const result = await MoreMenuScreen.getTextAlert(message);
  expect(result).to.be.eq(message);
});
