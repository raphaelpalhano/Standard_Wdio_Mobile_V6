import { When } from 'cucumber';
import { LoginScreen } from '../../pageobject/screens/LoginScreen';

When(`efetuar login com usuário {string}`, async (type) => {
  await LoginScreen.logIn(type);
});
