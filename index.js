'use strict';

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event, context, callback) => {
    // const myResponseBody = JSON.stringify(event);
    // console.log('reading event option is working!!! ', myResponseBody);

    let bucketParams = {
        Bucket: 'my-imageup-bucket',
    };
    let image, imgArray;

    try {
        image = await s3.listObjects(bucketParams).promise();
        imgArray = image.Contents.map(item => {
            let imgObj = {
                name: item.key,
                size: item.size,
                tag: item.eTag
            }
            return imgObj;
        })
    }
    catch (err) {
        console.log('error', err.message);
    }

    console.log(JSON.stringify(event), JSON.stringify(imgArray))
    // return {
    //     statusCode: 200,
    //     body:imgArray
    // }
    // return {
    //     statusCode: 200,
    //     body: `All is working \n ${myResponseBody}`
    // }
}

