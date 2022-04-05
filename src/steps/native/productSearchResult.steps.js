import { expect } from 'chai';
import { Then, When } from 'cucumber';
import {ProductSearchResult } from '../../models/screens/ProductSearchResult';

When(`acessa os detalhes do produto`, () => {
  ProductSearchResult.acessProduct();
});


Then('deve exibir o texto {string}', (textValue) => {
  expect( ProductSearchResult.getTextZeroResult()).to.be.eq(textValue);
});
