const aws = require('aws-sdk');
const configFile = require('./config.js');

(async () => {
  try {

    aws.config.setPromisesDependency();
    aws.config.update(
      configFile
    );

    const s3 = new aws.S3();

    var res = await s3.listObjectsV2({
      Bucket: 'mediaredfin'
    }).promise();

    console.log(res)

  } catch (e) {
    console.log('Error in photo retrieval', e);
  }
})();

