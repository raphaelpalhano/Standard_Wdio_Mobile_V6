const patternControl = require('../../utils/pattern.control');

module.exports = {

  login:{
    EMAIL:() => $('~input-email'),
    PASSWORD:() => $('~input-senha'),
    CONTINUEBUTTON:() => $('~btn-continuar'),
    SIGNBUTTON:() => $('~btn-cadastrar')
  },
  loginIos:{
    EMAIL:() => $('~input-email'),
    PASSWORD:() => $('~input-senha'),
    CONTINUEBUTTON:() => $('~btn-continuar'),
    SIGNBUTTON:() => $('~btn-cadastrar')
  },


};

