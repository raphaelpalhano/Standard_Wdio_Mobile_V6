import { Given} from 'cucumber';
import {LoginScreen } from '../../models/screens/LoginScreen';
import { MenuBar } from '../../models/screens/MenuBar';
import { MoreMenuScreen } from '../../models/screens/MoreMenuScreen';

const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

Given('que efetua login', () => {
  const element = ScreenManagerMobile.moreElements.ENTERBUTTON().isDisplayed();
  if(element){
    MoreMenuScreen.enterButton();
    LoginScreen.logIn();
    MenuBar.goToHomeTab();

  }
  if(!element){
    MenuBar.goToHomeTab();
  }


});

Given('que não esteja logado', () => {
  const element = ScreenManagerMobile.moreElements.EXITBUTTON().isDisplayed();
  if(element){
    MoreMenuScreen.exitButton();

  }
  if(!element){
    MenuBar.goToHomeTab();
  }


});
