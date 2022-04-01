import {When} from 'cucumber';
import { MoreMenuScreen } from '../../models/screens/MoreMenuScreen';


When('acessa a tela login', () => {
  MoreMenuScreen.goToLogin();
});
