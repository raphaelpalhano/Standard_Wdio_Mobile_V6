import { BaseScreen } from './BaseScreen';



const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

export class MoreMenuScreen extends BaseScreen{

  static goToLogin(){
    ScreenManagerMobile.moreElements.ENTERBUTTON().click();
    ScreenManagerMobile.loginElements.EMAIL().waitForDisplayed();
  }

  static enterButton(){
    ScreenManagerMobile.moreElements.ENTERBUTTON().click();
  }

  static exitButton(){
    ScreenManagerMobile.moreElements.EXITBUTTON().click();
  }


  static getTextAlert(mensagem){
    return ScreenManagerMobile.moreElements.ALERTMESSAGE(mensagem).getText();
  }
}
