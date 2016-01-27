const lights = require('./lights');
const isBuildSuccess = require('./isBuildSuccess');

const exit = () => {
  proccess.exit(); // eslint-disable-line
};

isBuildSuccess().then((isSuccess) => {
  if (isSuccess) {
    lights.turnOnGreenLight(exit);
  } else {
    lights.turnOffGreenLight(exit);
  }
});
