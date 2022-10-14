export const awsconfig = {
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId:process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        clientId: process.env.AWS_CLIENT_ID,
    }
}

export const middlewareconfig = {
    region: process.env.AWS_REGION,
    userPoolId: process.env.USER_POOL_ID_STAGE,
    tokenUse: ['id', 'access'], //Possible Values: access | id
    audience: [process.env.USER_POOL_APP_CLIENT_ID_STAGE] // (optional) the AWS Cognito User Pool App Client ID
}

//process.env.USER_POOL_ID_DEV;
export const userPoolId = process.env.USER_POOL_ID_STAGE;
//process.env.USER_POOL_ID_PROD;