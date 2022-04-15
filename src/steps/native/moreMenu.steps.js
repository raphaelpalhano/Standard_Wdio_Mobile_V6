import { Given } from '@wdio/cucumber-framework';
import {LoginScreen } from '../../models/screens/LoginScreen';
import { MenuBar } from '../../models/screens/MenuBar';
import { MoreMenuScreen } from '../../models/screens/MoreMenuScreen';

const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

Given('que efetua login', async () => {
  if(await (await ScreenManagerMobile.moreElements.ENTERBUTTON()).isDisplayed()){
    await MoreMenuScreen.enterButton();
    await LoginScreen.logIn();
    await MenuBar.goToHomeTab();

  }
  await MenuBar.goToHomeTab();

});

Given('que não esteja logado', async () => {
  if(await (await ScreenManagerMobile.moreElements.EXITBUTTON()).isDisplayed()){
    await MoreMenuScreen.exitButton();

  }
  await MenuBar.goToHomeTab();

});
