import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

export class MenuBar extends BaseScreen{

  static goToMoreTab(){
    ScreenManagerMobile.menuElements.MORETAB().click();
  }

  static goToHomeTab(){
    ScreenManagerMobile.menuElements.HOMETAB().click();
  }


}

