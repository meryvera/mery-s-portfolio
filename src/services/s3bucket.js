//import AWS from 'aws-sdk';

const s3bucket = new AWS.S3({
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
  signatureVersion: 'v4',
  region: import.meta.env.VITE_AWS_REGION,
});

const params = {
  Bucket: import.meta.env.VITE_AWS_BUCKET_NAME,
  Expires: 3000,
  Key: 'Resume - Mery Vera M.pdf' 
};

export const url = await s3bucket
  .getSignedUrlPromise('getObject', params)
  .catch((err) => {
    console.error(err);
});
