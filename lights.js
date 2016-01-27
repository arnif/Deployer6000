const gpio = require('rpi-gpio');

const RED_LIGHT_PIN = 11;
const YELLOW_LIGHT_PIN = 13;
const GREEN_LIGHT_PIN = 12;


function toggleLight(pin, toggle, cb) {
  gpio.write(pin, toggle, (err) => {
    if (err) {
      console.log(err); // eslint-disable-line
    }
    console.log('Written to pin'); // eslint-disable-line
    if (cb) {
      cb();
    }
  });
}

function setup(pin, toggle, cb) {
  gpio.setup(pin, gpio.DIR_OUT, toggleLight.bind(this, pin, toggle, cb));
}


module.exports = {
  turnOnRedLight(cb) {
    setup(RED_LIGHT_PIN, true, cb);
  },
  turnOffRedLight(cb) {
    setup(RED_LIGHT_PIN, false, cb);
  },

  turnOnYellowLight(cb) {
    setup(YELLOW_LIGHT_PIN, true, cb);
  },
  turnOffYellowLight(cb) {
    setup(YELLOW_LIGHT_PIN, false, cb);
  },

  turnOnGreenLight(cb) {
    setup(GREEN_LIGHT_PIN, true, cb);
  },
  turnOffGreenLight(cb) {
    setup(GREEN_LIGHT_PIN, false, cb);
  },
};
