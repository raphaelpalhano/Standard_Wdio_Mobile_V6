import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class SearchResultScreen extends BaseScreen{

  static async acessProduct(){
    await (await ScreenManagerMobile.productSearchResultElements.DETAILS()).click();

  }

  static async add(product){
    await (await ScreenManagerMobile.productSearchResultElements.ADDBUTTON(product)).click();
  }

  static async productNameInCard(productName){
    return (await ScreenManagerMobile.productSearchResultElements.PRODUCTNAME(productName)).getText();
  }

  static async getAddAlert(text){
    (await ScreenManagerMobile.productSearchResultElements.ALERTITEMADD(text));
  }

  static async getTextResult(result){
    return (await ScreenManagerMobile.productSearchResultElements.RESULTTEXT(result)).getText();
  }



}
