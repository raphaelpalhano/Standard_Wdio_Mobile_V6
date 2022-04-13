import { expect } from 'chai';
import { Given, Then} from 'cucumber';
import { MenuBar } from '../../models/screens/MenuBar';
import { MoreMenuScreen } from '../../models/screens/MoreMenuScreen';

const ScreenManagerMobile = require('../../components/native/ScreenManagerMobile');

Given('que acessa a tela de login', () => {
  const element = ScreenManagerMobile.moreElements.ENTERBUTTON().isDisplayed();
  if(!element){
    MoreMenuScreen.exitButton();
    MenuBar.sleepForMoreTabDisplay(2);
    MenuBar.goToMoreTab();
    MoreMenuScreen.enterButton();
  }
  if(element){
    MoreMenuScreen.enterButton();
  }


});


Then(`deve exibir a mensagem {string}`, (message) => {
  const result = MoreMenuScreen.getTextAlert(message);
  expect(result).to.be.eq(message);
});
