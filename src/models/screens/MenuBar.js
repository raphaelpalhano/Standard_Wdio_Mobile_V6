import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

export class MenuBar extends BaseScreen{

  static async waitMoreTabDisplay(){
    (await ScreenManagerMobile.menuElements.MORETAB()).waitForDisplayed();
  }

  static async sleepForMoreTabDisplay(time){
    await super.sleepForElement(await ScreenManagerMobile.menuElements.MORETAB(), time);
  }

  static async goToMoreTab(){
    await (await ScreenManagerMobile.menuElements.MORETAB()).click();
  }

  static async goToHomeTab(){
    await (await ScreenManagerMobile.menuElements.HOMETAB()).click();
  }


}

