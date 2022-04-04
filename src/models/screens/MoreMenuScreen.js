import { BaseScreen } from './BaseScreen';



const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

export class MoreMenuScreen extends BaseScreen{

  static goToLogin(){
    ScreenManagerMobile.moreElements.ENTERBUTTON().click();
    super.sleepForElement(ScreenManagerMobile.loginElements.EMAIL(), 2);
  }

  static enterButton(){
    ScreenManagerMobile.moreElements.ENTERBUTTON().click();
  }

  static exitButton(){
    ScreenManagerMobile.moreElements.EXITBUTTON().click();
  }

}
