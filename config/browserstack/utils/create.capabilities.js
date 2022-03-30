const createCapabilities = (DeviceInfo) => {
  const listObjects = new Array();
  let objects = {};
  for(let count = 0; count < DeviceInfo.deviceName().length; count++){
    objects = {
      project: DeviceInfo.project(),
      build: DeviceInfo.build(),
      name: DeviceInfo.name(),
      device: DeviceInfo.deviceName()[count],
      os_version: DeviceInfo.osVersion()[count],
      app: process.env.BROWSERSTACK_APP_ID || DeviceInfo.appName(),
      'browserstack.local': true,
      'browserstack.debug': true
    }
    listObjects.push(objects);
  }
  return listObjects;
}

module.exports = createCapabilities;
