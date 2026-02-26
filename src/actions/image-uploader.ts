'use server'
import {PutObjectCommand, S3Client} from '@aws-sdk/client-s3'
import {getSignedUrl} from '@aws-sdk/s3-request-presigner'


const r2 = new S3Client({
    region: "auto",
    endpoint: process.env.R2_ENDPOINT ?? '',
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID ?? '',
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? '',  
    },
})


export const getPresignedUrl = async (fileName: string, contentType: string) => {
    try {
        const putObjectCommand = new PutObjectCommand({
            Bucket: process.env.R2_BUCKET_NAME ?? '',
            Key: fileName,
            ContentType: contentType,
        });
        
        const presignedUrl = await getSignedUrl(r2, putObjectCommand, { expiresIn: 3600 });
        return { succes: true, url: presignedUrl, publicUrl: `${process.env.R2_PUBLIC_URL}/${fileName}`};
    } catch(error) {
        console.error("Ошибка получения presigned URL", error);
        return {error: true, message: "Ошибка при получении ссылки"};
    }
}
