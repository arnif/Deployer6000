const axios = require('axios');
const q = require('q');

const url = process.env.PROJECT_URL;

const isBuildSuccess = () => {
  const deferred = q.defer();
  axios.get(url).then((response) => {
    const contentDisposition = response.headers['content-disposition'];
    if (contentDisposition.indexOf('status_success') > -1) { // TODO handle more statuses
      deferred.resolve(true);
    } else {
      deferred.resolve(false);
    }
  });
  return deferred.promise;
};

module.exports = isBuildSuccess;
