import { BaseScreen } from './BaseScreen';

import { Factory } from '../../fixture/Factory';

const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

const dataUser = Factory.getUserToLogin('valid');

export class LoginScreen extends BaseScreen{

  static async logIn(){
    await (await ScreenManagerMobile.loginElements.EMAIL()).addValue( dataUser.email);
    await (await ScreenManagerMobile.loginElements.PASSWORD()).addValue(dataUser.password);
    await (await ScreenManagerMobile.loginElements.CONTINUEBUTTON()).click();
  }


}
