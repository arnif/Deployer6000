const lights = require('./lights');
const getBuildStatus = require('./getBuildStatus');

const exit = () => {
  process.exit();
};

getBuildStatus().then((status) => {
  if (status.success) {
    lights.stopBlinking();
    lights.turnOffYellowLight();
    lights.turnOffRedLight();
    lights.turnOnGreenLight(exit);
  } else if (status.building) {
    // only light yellow, so we can see if we are recovering from a failed build.
    lights.blinkYellow(500, () => {
      setTimeout(() => {
        lights.turnOffYellowLight(exit);
      }, 240000); // stop blinking after 4min
    });
  } else {
    lights.stopBlinking();
    lights.turnOffGreenLight();
    lights.turnOffYellowLight();
    lights.turnOnRedLight(exit);
  }
});
