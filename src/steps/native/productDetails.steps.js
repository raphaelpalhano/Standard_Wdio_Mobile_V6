import { Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import { ProductDetailsScreen } from '../../models/screens/ProductDetailsScreen';

Then(`deve exibir o titulo {string}`, async (nameProduct) => {
  expect( await ProductDetailsScreen.getProductDetails(nameProduct)).to.be.eq(nameProduct);
});
