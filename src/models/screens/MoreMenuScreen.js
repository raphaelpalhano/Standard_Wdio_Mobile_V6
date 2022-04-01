import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

export class MoreMenuScreen extends BaseScreen{

  static goToLogin(){
    super.clickElement( ScreenManagerMobile.moreElements.ENTERBUTTON);
    super.sleepForElement(ScreenManagerMobile.loginElements.EMAIL, 2);
  }


}
