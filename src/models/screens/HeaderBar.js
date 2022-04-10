import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class HeaderBar extends BaseScreen{

  static async searchProduct(nameProduct){
    await (await ScreenManagerMobile.headerElements.SEARCHBAR()).click();
    await (await ScreenManagerMobile.headerElements.SEARCHINPUT()).addValue(nameProduct);
    await (await ScreenManagerMobile.headerElements.MAGNIFYINGLASS()).click();

  }



}
