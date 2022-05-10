import { Given, When } from 'cucumber';
import { MenuBar } from '../../pageobject/screens/MenuBar';


Given('o acesso ao menu Mais', async () => {
  await MenuBar.goToMoreTab();
});

When('acessa o Home', async () => {
  await MenuBar.goToHomeTab();
});
