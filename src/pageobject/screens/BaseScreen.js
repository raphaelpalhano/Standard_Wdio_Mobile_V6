export class BaseScreen{

  static launchApp() {
    driver.launchApp();

  }

  static switchToNativeContext() {
    browser.switchContext('NATIVE_APP');

  }


  static async simpleClick(element){
    await element.click();
  }

  static async multipleClick(element, quantity){
    for(let i = 0; i <= quantity; i+=1){
      element.click();
    }
  };


  static async waitForElement(element, time) {
    await element.waitForDisplayed({timeout: time * 1000});
  }



  static async sleepForElement(element, seconds){
    await element.pause(seconds * 1000);

  }


}


