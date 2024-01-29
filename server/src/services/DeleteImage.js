import AWS from "aws-sdk";
import config from "../config.js";

AWS.config.update({
  accessKeyId: config.awsAccess.key,
  secretAccessKey: config.awsSecret.key,
  region: "us-east-1",
});

const s3 = new AWS.S3();

const deleteImage = (key) => {
  const params = {
    Bucket: config.s3Bucket.name,
    Key: key,
  };
  s3.deleteObject(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log("deleted");
  });
};

export default deleteImage;
