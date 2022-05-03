import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class SearchBarScreen extends BaseScreen{

  static async goToSeachBar(){
    await (await ScreenManagerMobile.headerElements.SEARCHBAR()).click();
  }

  static async searchProduct(nameProduct){
    if(await (await ScreenManagerMobile.headerElements.SEARCHINPUT()).waitForDisplayed()){
      await (await ScreenManagerMobile.headerElements.SEARCHINPUT()).addValue(nameProduct);
      await (await ScreenManagerMobile.headerElements.MAGNIFYINGLASS()).click();
    }



  }


  static async goToOrder(order){
    await (await ScreenManagerMobile.headerElements.ORDINATION(order)).click();
  }



}
