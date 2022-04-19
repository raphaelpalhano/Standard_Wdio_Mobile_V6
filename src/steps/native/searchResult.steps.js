import { expect } from 'chai';
import { Then } from 'cucumber';
import { SearchResultScreen } from '../../models/screens/SearchResultScreen';


Then(`deve exibir o produto {string}`, async (productName) => {
  const result = await SearchResultScreen.productNameInCard(productName);
  expect(result).to.be.eq(productName);
});


Then(`deve exibir o valor {string}`, async (value) => {
  const result = await  SearchResultScreen.getTextZeroResult();
  expect(result).to.be.eq(value);
});
