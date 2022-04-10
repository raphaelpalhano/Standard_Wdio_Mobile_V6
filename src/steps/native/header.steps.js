import { When} from 'cucumber';

import {HeaderBar } from '../../models/screens/HeaderBar';

When('buscar pelo produto {string}', (nomeProduto) => {
  HeaderBar.searchProduct(nomeProduto);
});
