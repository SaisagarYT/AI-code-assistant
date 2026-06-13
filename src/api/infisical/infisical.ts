import { InfisicalSDK } from "@infisical/sdk";
import dotenv from 'dotenv';
dotenv.config();

const client = new  InfisicalSDK();

await client.auth().universalAuth.login({
    clientId:process.env.INFISICAL_CLIENT_ID || "",
    clientSecret:process.env.INFISICAL_CLIENT_SECRET || ""
});

const secret = client.secrets().getSecret;

export default secret;