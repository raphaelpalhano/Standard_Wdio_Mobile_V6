module.exports = {
  ios:() => {
    const pattern = {
      predicate: '-ios predicate string:',
      chain: '-ios class chain:',
      target: 'UIATarget.localTarget().frontMostApp()'
    };
    return pattern;

  },

  Android: () => {
    const pattern = {
      uiAutomator: 'new UiSelector()',
      id: 'id:',
      xpath: '//',
      accessibilityId: '~'
    };

    return pattern;
  }
};


