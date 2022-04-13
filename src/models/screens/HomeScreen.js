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

  static selectAllowText(text){
    if(ScreenManagerMobile.homeElements.LOCATIONOPTIONS(text).isDisplayed()){
      const element = ScreenManagerMobile.homeElements.LOCATIONOPTIONS(text);
      element.click();
    }

  }


  static waitDisplayHome(){
    ScreenManagerMobile.menuElements.HOMETAB().waitForDisplayed();
  }

  static waitHome(time){
    super.sleepForElement(ScreenManagerMobile.menuElements.HOMETAB(), time);
  }


  static updateLater(){
    if(ScreenManagerMobile.homeElements.UPDATEOPTION().isDisplayed()){
      const element = ScreenManagerMobile.homeElements.UPDATEOPTION();
      element.click();
      driver.pause(1000);
    }

  }

}
