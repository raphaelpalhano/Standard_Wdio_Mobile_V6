import {Given} from 'cucumber';
import { MenuScreen } from '../../models/screens/MenuScreen';

Given('acessa o menu mais', () => {
  MenuScreen.goToMoreTab();
});
