const createCapabilitiesiOS = (DeviceInfo) => {
  const listObjects = new Array();
  let device = {};
  for(let count = 0; count < DeviceInfo.deviceName().length; count++){
    device = {
        'cjson:metadata': {
          device: DeviceInfo.deviceName()[count],
          platform: {
              name: 'iOS',
              version:  DeviceInfo.osVersion()[count]
          },
          browser: {
              name: 'chrome',
              version: '100.0',
          },
          // for an app
          app: {
              name: DeviceInfo.project(),
              version: '2.2.69',
          },
      },
      noReset: false,
      fullReset: true,
      platformName: 'iOS',
      project: DeviceInfo.project(),
      build: DeviceInfo.build(),
      name: DeviceInfo.name(),
      device: DeviceInfo.deviceName()[count],
      os_version: DeviceInfo.osVersion()[count],
      app: process.env.BROWSERSTACK_APP_ID || DeviceInfo.appName(),
      'browserstack.local': true,
      'browserstack.debug': true,
      'browserstack.networkLogs': 'true',
    }
    listObjects.push(device);
  }
  return listObjects;
}

module.exports = createCapabilitiesiOS;
