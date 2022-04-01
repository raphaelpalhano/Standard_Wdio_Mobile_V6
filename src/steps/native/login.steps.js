import {When} from 'cucumber';
import { LoginScreen } from '../../models/screens/LoginScrenn';

When('efetua login', () => {
  LoginScreen.logIn();
});
