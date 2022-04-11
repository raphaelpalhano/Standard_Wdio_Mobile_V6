import { BaseScreen } from './BaseScreen';

import { Factory } from '../../fixture/Factory';

const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');


export class LoginScreen extends BaseScreen{

  static async logIn(){
    const dataUser = Factory.getUserToLogin('valid');
    await (await ScreenManagerMobile.loginElements.EMAIL()).addValue( dataUser.email);
    await (await ScreenManagerMobile.loginElements.PASSWORD()).addValue(dataUser.password);
    await (await ScreenManagerMobile.loginElements.CONTINUEBUTTON()).click();
  }


}
