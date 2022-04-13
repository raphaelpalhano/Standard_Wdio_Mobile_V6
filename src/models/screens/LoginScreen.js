import { BaseScreen } from './BaseScreen';

import { Factory } from '../../fixture/Factory';

const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class LoginScreen extends BaseScreen{

  static logIn(type){
    let dataUser = Factory.getUserToLogin(type);
    ScreenManagerMobile.loginElements.EMAIL().addValue( dataUser.email);
    ScreenManagerMobile.loginElements.PASSWORD().addValue(dataUser.password);
    ScreenManagerMobile.loginElements.CONTINUEBUTTON().click();
  }


}
