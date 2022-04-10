import { When } from 'cucumber';
import {HeaderBar } from '../../models/screens/HeaderBar';

When('buscar pelo produto {string}', async (nomeProduto) => {
  await HeaderBar.searchProduct(nomeProduto);
});
