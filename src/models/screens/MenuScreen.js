import { BaseScreen } from './BaseScreen';


const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

export class MenuScreen extends BaseScreen{

  static goToMoreTab(){
    super.clickElement(ScreenManagerMobile.menuElements.MORETAB);
  }


}

