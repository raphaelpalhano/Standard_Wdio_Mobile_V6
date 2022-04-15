import { Then, When } from '@wdio/cucumber-framework';
import { expect } from 'chai';


import {ProductSearchResult } from '../../models/screens/ProductSearchResult';

When(`acessa os detalhes do produto`, async () => {
  await ProductSearchResult.acessProduct();
});


Then('deve exibir o texto {string}', async (textValue) => {
  expect( await ProductSearchResult.getTextZeroResult()).to.be.eq(textValue);
});
