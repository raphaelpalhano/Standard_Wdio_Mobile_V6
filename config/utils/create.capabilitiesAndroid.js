const createCapabilitiesAndroid = (DeviceInfo) => {
  const listObjects = new Array();
  let device = {};
  for(let count = 0; count < DeviceInfo.deviceName().length; count++){

    device = {
        'cjson:metadata': {
          device: DeviceInfo.deviceName()[count],
          platform: {
              name: 'Android',
              version:  DeviceInfo.osVersion()[count]
          },
          browser: {
              name: 'chrome',
              version: '100.0',
          },
          // for an app
          app: {
              name: DeviceInfo.project(),
              version: '2.2.72',
          },
      },
      platformName: 'Android',
      project: DeviceInfo.project(),
      build: DeviceInfo.build(),
      name: DeviceInfo.name(),
      device: DeviceInfo.deviceName()[count],
      os_version: DeviceInfo.osVersion()[count],
      'autoGrantPermissions': 'true',
      app: process.env.BROWSERSTACK_APP_ID || DeviceInfo.appName(),
      'browserstack.local' : true,
      'browserstack.debug': true,
      'browserstack.networkLogs': true

    }
    listObjects.push(device);
  }
  return listObjects;
}

module.exports = createCapabilitiesAndroid;
