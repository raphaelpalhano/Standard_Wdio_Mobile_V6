import { When } from 'cucumber';
import {ProductSearchResult } from '../../models/screens/ProductSearchResult';

When(`acessa os detalhes do produto`, () => {
  ProductSearchResult.acessProduct();
});
