const gpio = require('rpi-gpio');
const lights = require('./lights');
const getBuildStatus = require('./getBuildStatus');
// const execFile = require('child_process').execFile;

const SWITCH_PIN = 3;
const DEPLOY_BUTTON_PIN = 5;

var readyToDeploy = false; // eslint-disable-line no-var

gpio.on('change', (channel, value) => {
  console.log('Channel ' + channel + ' value is now ' + value);
  if (channel === SWITCH_PIN) {
    if (value) {
      console.log('LIGHTS ON');
      lights.turnOnYellowLight();
      readyToDeploy = true;
    } else {
      console.log('LIGHTS OFF');
      lights.turnOffYellowLight();
      readyToDeploy = false;
    }
  }
  console.log('readyToDeploy', readyToDeploy);

  if (channel === DEPLOY_BUTTON_PIN) {
    if (readyToDeploy && !value) {
      getBuildStatus().then((status) => {
        console.log('is success', status);
        if (status.success && !status.building) {
          console.log('DEEPLOY');
          // execFile('sh', ['deploy.sh'], (error, stdout) => {
          //   if (error) {
          //     console.log(error);
          //   }
          //   console.log(stdout); // eslint-disable-line no-console
          // });
        } else {
          console.log('build fail, no deploy :sad-pee:');
        }
      });
    }
  }
});
gpio.setup(SWITCH_PIN, gpio.DIR_IN, gpio.EDGE_BOTH);
gpio.setup(DEPLOY_BUTTON_PIN, gpio.DIR_IN, gpio.EDGE_BOTH);
