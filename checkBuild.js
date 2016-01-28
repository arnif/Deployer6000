const lights = require('./lights');
const getBuildStatus = require('./getBuildStatus');

const exit = () => {
  process.exit();
};

getBuildStatus().then((status) => {
  if (status.success) {
    lights.turnOnGreenLight(exit);
  } else if (status.building) {
    lights.turnOnYellowLight(exit); // TODO blink
  } else {
    lights.turnOffGreenLight();
    lights.turnOffYellowLight();
    lights.turnOnRedLight(exit);
  }
});
