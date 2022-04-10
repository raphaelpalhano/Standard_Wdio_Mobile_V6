import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

export class MenuBar extends BaseScreen{

  static async goToMoreTab(){
    await (await ScreenManagerMobile.menuElements.MORETAB()).click();
  }

  static async goToHomeTab(){
    await (await ScreenManagerMobile.menuElements.HOMETAB()).click();
  }


}

