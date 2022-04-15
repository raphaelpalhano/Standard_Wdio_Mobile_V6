import { Given } from '@wdio/cucumber-framework';
import { MenuBar } from '../../models/screens/MenuBar';


Given('o acesso ao menu Mais', async () => {
  await MenuBar.goToMoreTab();
});
