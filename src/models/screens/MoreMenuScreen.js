import { BaseScreen } from './BaseScreen';



const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

export class MoreMenuScreen extends BaseScreen{

  static async goToLogin(){
    await (await ScreenManagerMobile.moreElements.ENTERBUTTON()).click();
    super.sleepForElement((await ScreenManagerMobile.loginElements.EMAIL()), 2);
  }

  static async enterButton(){
    await (await ScreenManagerMobile.moreElements.ENTERBUTTON()).click();
  }

  static async exitButton(){
    await (await ScreenManagerMobile.moreElements.EXITBUTTON()).click();
  }

}
