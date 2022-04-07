import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class HomeScreen extends BaseScreen{

  static launchApp() {
    super.launchApp();
    super.switchToNativeContext();
  }

  static selectAllow(index){
    ScreenManagerMobile.homeElements.LISTLOCATION(index).click();


  }



  static waitHome(time){
    super.sleepForElement(ScreenManagerMobile.menuElements.HOMETAB(), time);
  }


  static updateLater(){
    if( ScreenManagerMobile.homeElements.UPDATEOPTION().isDisplayed()){
      ScreenManagerMobile.homeElements.UPDATEOPTION().click();
      super.sleepForElement(ScreenManagerMobile.menuElements.HOMETAB(), 7);
    }

  }

}
