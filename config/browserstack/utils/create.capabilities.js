const createCapabilities = (AndroidInfo) => {
  const listObjects = new Array();
  let objects = {};
  for(let count = 0; count < AndroidInfo.deviceName().length; count++){
    objects = {
      project: AndroidInfo.project(),
      build: AndroidInfo.build(),
      name: AndroidInfo.name(),
      device: AndroidInfo.deviceName()[count],
      os_version: AndroidInfo.osVersion()[count],
      app: process.env.BROWSERSTACK_APP_ID || AndroidInfo.appName(),
      'browserstack.local': true,
      'browserstack.debug': true
    }
    listObjects.push(objects);
  }
  return listObjects;
}

module.exports = createCapabilities;
