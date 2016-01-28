const lights = require('./lights');
const getBuildStatus = require('./getBuildStatus');

const exit = () => {
  process.exit();
};

getBuildStatus().then((status) => {
  if (status.success) {
    lights.turnOffYellowLight();
    lights.turnOffRedLight();
    lights.turnOnGreenLight(exit);
  } else if (status.building) {
    // only light yellow, so we can see if we are recovering from a failed build.
    lights.turnOnYellowLight(exit); // TODO blink
  } else {
    lights.turnOffGreenLight();
    lights.turnOffYellowLight();
    lights.turnOnRedLight(exit);
  }
});
