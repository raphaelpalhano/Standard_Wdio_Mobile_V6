import { BaseScreen } from './BaseScreen';

import { Factory } from '../../fixture/Factory';

const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

const dataUser = Factory.getUserToLogin('valid');

export class LoginScreen extends BaseScreen{

  static logIn(){
    super.typeValue(ScreenManagerMobile.loginElements.EMAIL, dataUser.email);
    super.typeValue(ScreenManagerMobile.loginElements.PASSWORD,dataUser.password);
    super.clickElement(ScreenManagerMobile.loginElements.CONTINUEBUTTON);
  }


}
