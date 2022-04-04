import { Given} from 'cucumber';
import {LoginScreen } from '../../models/screens/LoginScrenn';
import { MenuBar } from '../../models/screens/MenuBar';
import { MoreMenuScreen } from '../../models/screens/MoreMenuScreen';

const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

Given('que efetua login', () => {
  if(ScreenManagerMobile.moreElements.ENTERBUTTON().isDisplayed()){
    MoreMenuScreen.enterButton();
    LoginScreen.logIn();
    MenuBar.goToHomeTab();

  }
  MenuBar.goToHomeTab();

});

Given('que não esteja logado', () => {
  if(ScreenManagerMobile.moreElements.EXITBUTTON().isDisplayed()){
    MoreMenuScreen.exitButton();

  }
  MenuBar.goToHomeTab();

});
