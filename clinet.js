// import { DetectLabelsCommand } from  "@aws-sdk/client-rekognition";
// import  { RekognitionClient } from "@aws-sdk/client-rekognition";

// // Set the AWS Region.
// const REGION = "us-east-1"; //e.g. "us-east-1"
// // Create SNS service object.
// const rekogClient = new RekognitionClient({ region: REGION });

// const bucket = 'my-imageup-bucket'
// const photo = 'Landscape.jpg'

// // Set params
// const params = {
//     Image: {
//       S3Object: {
//         Bucket: bucket,
//         Name: photo,
      
//       },
//     },
//   }

// const detect_labels = async () => {
//     try {
//         const response = await rekogClient.send(new DetectLabelsCommand(params));
//         console.log(response.Labels)
//         response.Labels.forEach(label =>{
//             console.log(`Confidence: ${label.Confidence}`)
//             console.log(`Name: ${label.Name}`)
//             console.log('Instances:')
//             label.Instances.forEach(instance => {
//                 console.log(instance)
//             })
//             console.log('Parents:')
//             label.Parents.forEach(name => {
//                 console.log(name)
//             })
//             console.log("-------")
//         })
//         return response; // For unit tests.
//       } catch (err) {
//         console.log("Error", err);
//       }
// };

// detect_labels();