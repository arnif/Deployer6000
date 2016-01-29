const axios = require('axios');
const q = require('q');

const url = process.env.PROJECT_URL;

const getBuildStatus = () => {
  const deferred = q.defer();
  axios.get(url).then((response) => {
    const contentDisposition = response.headers['content-disposition'];

    if (contentDisposition.indexOf('status_success') > -1) {
      deferred.resolve({ success: true, building: false, failed: false });
    } else if (contentDisposition.indexOf('status_testing') > -1) {
      deferred.resolve({ success: false, building: true, failed: false });
    } else {
      deferred.resolve({ success: false, building: false, failed: true });
    }
  });
  return deferred.promise;
};

module.exports = getBuildStatus;
