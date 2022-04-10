import { expect } from 'chai';
import { Then } from 'cucumber';
import { ProductDetailsScreen } from '../../models/screens/ProductDetailsScreen';

Then(`deve exibir o titulo {string}`, (nameProduct) => {
  expect(ProductDetailsScreen.getProductDetails(nameProduct)).to.be.eq(nameProduct);
});
