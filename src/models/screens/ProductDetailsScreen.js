import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class ProductDetailsScreen extends BaseScreen{

  static async getProductDetails(nameProduct){
    return (await ScreenManagerMobile.productDetailsElements.PRODUCT(nameProduct)).getText();
  }



}
