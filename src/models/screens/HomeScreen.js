import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class HomeScreen extends BaseScreen{

  static async launchApp() {
    super.launchApp();
    super.switchToNativeContext();
  }

  static async selectAllow(index){
    await (await ScreenManagerMobile.homeElements.LISTLOCATION(index)).click();

  }

  static async selectAllowText(text){
    if( await (await ScreenManagerMobile.homeElements.LOCATIONOPTIONS(text)).isDisplayed()){
      const element = (await ScreenManagerMobile.homeElements.LOCATIONOPTIONS(text));
      (await element.click());
    }

  }


  static async waitHome(time){
    await super.sleepForElement((await ScreenManagerMobile.menuElements.HOMETAB()), time);
  }


  static async updateLater(){
    if(await (await ScreenManagerMobile.homeElements.UPDATEOPTION()).isDisplayed());
    const element = (await ScreenManagerMobile.homeElements.UPDATEOPTION());
    (await element.click());
    (await driver.pause(1000));
  }

}
