import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class SearchResultScreen extends BaseScreen{

  static async acessProduct(){
    await (await ScreenManagerMobile.productsearchResultElements.DETAILS()).click();

  }

  static async productNameInCard(productName){
    return (await ScreenManagerMobile.productsearchResultElements.PRODUCTNAME(productName)).getText();
  }

  static async getTextZeroResult(){
    return (await ScreenManagerMobile.productsearchResultElements.ZERORESULTS()).getText();
  }



}
