const createCapabilitiesIos = async (DeviceInfo) => {
  const listObjects = new Array();
  let device = {};
  for(let count = 0; count < DeviceInfo.deviceName().length; count++){
    device = {
      project: DeviceInfo.project(),
      build: DeviceInfo.build(),
      name: DeviceInfo.name(),
      device: DeviceInfo.deviceName()[count],
      os_version: DeviceInfo.osVersion()[count],
      locale: `br_CA`,
      language: 'pt',
      app: process.env.BROWSERSTACK_APP_ID || DeviceInfo.appName(),
      'browserstack.local': true,
      'browserstack.debug': true
    }
    listObjects.push(device);
  }
  return listObjects;
}

module.exports = createCapabilitiesIos;
