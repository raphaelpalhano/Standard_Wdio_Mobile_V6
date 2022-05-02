import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class SearchResultScreen extends BaseScreen{

  static async acessProduct(){
    await (await ScreenManagerMobile.productSearchResultElements.DETAILS()).click();

  }

  static async productNameInCard(productName){
    await (await ScreenManagerMobile.productSearchResultElements.PRODUCTNAME(productName)).waitForDisplayed();
    return (await ScreenManagerMobile.productSearchResultElements.PRODUCTNAME(productName)).getText();
  }

  static async getTextResult(result){
    return (await ScreenManagerMobile.productSearchResultElements.RESULTTEXT(result)).getText();
  }


  static async getStaticResult(){
    return (await ScreenManagerMobile.productSearchResultElements.STATICRESULT()).getText();
  }


}
