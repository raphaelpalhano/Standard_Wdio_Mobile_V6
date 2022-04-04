import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class ProductSearchResult extends BaseScreen{

  static acessProduct(){
    ScreenManagerMobile.productsearchResultElements.DETAILS().click();

  }


}
