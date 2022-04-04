import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class ProductDetailsScreen extends BaseScreen{

  static getProductDetails(nameProduct){
    return ScreenManagerMobile.productDetailsElements.PRODUCT(nameProduct).getText();
  }



}
