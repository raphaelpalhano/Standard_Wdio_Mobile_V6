import { When } from 'cucumber';
import { LoginScreen } from '../../models/screens/LoginScreen';

When(`efetuar login com usuário {string}`, (type) => {
  LoginScreen.logIn(type);
});
