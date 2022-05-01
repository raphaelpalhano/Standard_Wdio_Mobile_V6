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
    if(await (await ScreenManagerMobile.homeElements.LOCATIONOPTIONS(text)).waitForDisplayed()){
      await (await ScreenManagerMobile.homeElements.LOCATIONOPTIONS(text)).click();

    }

  }

  static async sleepApp(time){
    driver.pause(time * 1000);
  }


  static async waitAllow(text, time){
    await super.sleepForElement((await ScreenManagerMobile.homeElements.LOCATIONOPTIONS(text)), time);

  }

  static async waitHome(time){
    await super.sleepForElement((await ScreenManagerMobile.menuElements.HOMETAB()), time);
  }

  static async waitDisplayed(){
    await (await ScreenManagerMobile.menuElements.HOMETAB()).waitForDisplayed();
  }


  static async updateLater(){
    if(await (await ScreenManagerMobile.homeElements.UPDATEOPTION()).waitForDisplayed());
    const element = (await ScreenManagerMobile.homeElements.UPDATEOPTION());
    (await element.click());
    (await driver.pause(1000));
  }

}
