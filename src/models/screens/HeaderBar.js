import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class HeaderBar extends BaseScreen{

  static searchProduct(nameProduct){
    ScreenManagerMobile.headerElements.SEARCHBAR().click();
    ScreenManagerMobile.headerElements.SEARCHINPUT().addValue(nameProduct);
    ScreenManagerMobile.headerElements.MAGNIFYINGLASS().click();

  }



}
