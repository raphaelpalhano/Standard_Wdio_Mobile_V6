import { expect } from 'chai';
import { Then } from 'cucumber';
import { ProductDetailsScreen } from '../../models/screens/ProductDetailsScreen';

Then(`deve exibir o titulo {string}`, (reference) => {
  expect(ProductDetailsScreen.getProductDetails(reference)).to.be.eq(reference);
});
