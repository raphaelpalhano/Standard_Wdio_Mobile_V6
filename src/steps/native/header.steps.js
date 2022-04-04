const { When } = require('cucumber');
const { HeaderBar } = require('../../models/screens/HeaderBar');

When('buscar pelo produto {string}', (nomeProduto) => {
  HeaderBar.searchProduct(nomeProduto);
});
