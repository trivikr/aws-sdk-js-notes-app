import { s3Client } from "./s3Client";
import config from "../config.json";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";

const { FILES_BUCKET } = config;

const deleteObject = async (fileName: string) =>
  s3Client.send(
    new DeleteObjectCommand({
      Key: fileName,
      Bucket: FILES_BUCKET,
    })
  );

export { deleteObject };
