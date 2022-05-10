import {  expect } from 'chai';
import { Then, When } from 'cucumber';
import { SearchResultScreen } from '../../pageobject/screens/SearchResultScreen';


Then(`deve exibir o produto {string}`, async (productName) => {
  const result = await SearchResultScreen.productNameInCard(productName);
  await expect(result).to.be.eq(productName);
});


Then(`deve exibir o valor {string}`, async (value) => {
  const result = await SearchResultScreen.getTextResult(value);
  await expect(result).to.be.eq(value);
  //
});


When(`clicar no botao Adicionar do produto {string} na result list`, async (product) => {
  await SearchResultScreen.add(product);
});


When(`clicar no icone favoritar do produto {string} na result list`, async (product) => {
  await SearchResultScreen.favoriteIcon(product);
});


Then(`deve exibir uma mensagem {string}`, async (message) => {
  await SearchResultScreen.getAddAlert(message);
});
