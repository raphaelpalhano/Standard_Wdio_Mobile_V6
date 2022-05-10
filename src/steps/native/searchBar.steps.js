import { Given, When } from 'cucumber';
import { SearchBarScreen } from '../../pageobject/screens/SearchBarScreen';

Given('o acesso a barra de pesquisa', async () => {
  await SearchBarScreen.goToSeachBar();
});


When(`busca pelo produto {string}`, async (produto) => {
  await SearchBarScreen.searchProduct(produto);
});


When(`busca pelo codigo de referencia {string}`, async (codReferencia) => {
  await SearchBarScreen.searchProduct(codReferencia);
});

