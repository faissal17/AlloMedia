const express = require("express");
const { imageController } = require("../../../controllers");

const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  PutObjectAclCommand,
} = require("@aws-sdk/client-s3");
const multer = require("multer");
const crypto = require("crypto");

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: "AKIATGEB5CLT3WGB6Y5Z",
    secretAccessKey: "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",
  },
});
const randomImage = (bytes = 32) => crypto.randomBytes(bytes).toString("hex");
const bucketName = "testing-delivery";

async function getObjectURL(key) {
  const command = new GetObjectCommand({
    Bucket: "testing-delivery",
    Key: key,
  });
  const url = await getSignedUrl(s3Client, command);
  return url;
}
//

module.exports = (dependencies) => {
  const storage = multer.memoryStorage();
  const upload = multer({ storage: storage });

  const router = express.Router();
  const {
    addImagesController,
    updateImagesController,
    deleteImagesController,
    getImagesByIdController,
  } = imageController(dependencies);

  router
    .route("/")
    .post(upload.single("image"), async (req, res) => {
      console.log("fuckit");
      console.log("req.body", req.body);
      console.log("req.file", req.file);

      //resize image
      const imageName = randomImage();
      const params = {
        Bucket: bucketName,
        Key: imageName,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
      };
      const command = new PutObjectCommand(params);
      await s3Client.send(command);
      async function init() {
        console.log("fucking image", await getObjectURL(imageName));
      }

      init();
    })
    .delete(deleteImagesController)
    .patch(updateImagesController);

  router.route("/:id").get(getImagesByIdController);

  return router;
};
