import selectorsControl from '../../../utils/componentControl';

export class CelsiusToFahrenheitElements{

  static textField (value){
    if(driver.isAndroid)
      return $(`id:editText${value}`);

    return $(`${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`);
  };

  static ConvertButton (value){
    if(driver.isAndroid)
      return $(`id:btncnv${value}`);

    return $(`${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`);

    // const selector = `new UiSelector().text("CONVERT ${value}").resourceId(
    //  "com.androiddev2015.cfconverter:id/btncnvCF")`;
    // const button =  $(`android=${selector}`);
    // return button;
  };

  static get appMessage() {
    // Operador:
    if(driver.isAndroid)
      return $('id:message');

    return $(`${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`);

  };

  static get laterButton() {
    if(driver.isAndroid)
      return $('id:button3');

    return $(`${selectorsControl.ios().predicate}type == 'XCUIElementTypeSwitch' && name CONTAINS 'Allow'`);

  };

}

