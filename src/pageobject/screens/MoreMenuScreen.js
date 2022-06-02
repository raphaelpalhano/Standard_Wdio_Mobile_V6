import { BaseScreen } from './BaseScreen';



const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

export class MoreMenuScreen extends BaseScreen{

  static async goToLogin(){
    await (await ScreenManagerMobile.moreElements.ENTERBUTTON()).click();
    await (await ScreenManagerMobile.loginElements.EMAIL()).waitForDisplayed();
  }

  static async sleepforEnter(time){
    await super.sleepForElement(await ScreenManagerMobile.moreElements.ENTERBUTTON(), time);
  }

  static async enterButton(){
    await (await ScreenManagerMobile.moreElements.ENTERBUTTON()).click();
  }

  static async exitButton(){
    await (await ScreenManagerMobile.moreElements.EXITBUTTON()).click();

  }



  static async getTextAlert(mensagem){
    return (await ScreenManagerMobile.moreElements.ALERTMESSAGE(mensagem)).getText();
  }

}
