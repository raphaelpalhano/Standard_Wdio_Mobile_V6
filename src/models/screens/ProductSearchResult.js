import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class ProductSearchResult extends BaseScreen{

  static async acessProduct(){
    await (await ScreenManagerMobile.productsearchResultElements.DETAILS()).click();

  }

  static async getTextZeroResult(){
    return (await ScreenManagerMobile.productsearchResultElements.ZERORESULTS()).getText();
  }



}
