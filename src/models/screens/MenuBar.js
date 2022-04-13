import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

export class MenuBar extends BaseScreen{


  static waitMoreTabDisplay(){
    ScreenManagerMobile.menuElements.MORETAB().waitForDisplayed();
  }

  static sleepForMoreTabDisplay(time){
    super.sleepForElement(ScreenManagerMobile.menuElements.MORETAB(), time);
  }

  static goToMoreTab(){
    ScreenManagerMobile.menuElements.MORETAB().click();
  }

  static goToHomeTab(){
    ScreenManagerMobile.menuElements.HOMETAB().click();
  }


}

