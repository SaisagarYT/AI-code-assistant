import {InfisicalSDK} from '@infisical/sdk'
import dotenv from 'dotenv';
dotenv.config();

const client = new InfisicalSDK();
console.log(process.env.INFISICAL_CLIENT_SECRET)
try{
    await client.auth().universalAuth.login({
        clientId:process.env.INFISICAL_CLIENT_ID,
        clientSecret:process.env.INFISICAL_CLIENT_SECRET
    });
}
catch(err){
    console.error(err);
}

export default client.secrets().getSecret;