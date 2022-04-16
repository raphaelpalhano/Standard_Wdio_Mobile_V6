import { When } from 'cucumber';
import { LoginScreen } from '../../models/screens/LoginScreen';

When(`efetuar login com usuário {string}`, async (type) => {
  await LoginScreen.logIn(type);
});
