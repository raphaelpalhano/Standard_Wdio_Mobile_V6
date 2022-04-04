import { BaseScreen } from './BaseScreen';

import { Factory } from '../../fixture/Factory';

const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

const dataUser = Factory.getUserToLogin('valid');

export class LoginScreen extends BaseScreen{

  static logIn(){
    ScreenManagerMobile.loginElements.EMAIL().addValue( dataUser.email);
    ScreenManagerMobile.loginElements.PASSWORD().addValue(dataUser.password);
    ScreenManagerMobile.loginElements.CONTINUEBUTTON().click();
  }


}
