import {InfisicalSDK} from '@infisical/sdk'

const client = new InfisicalSDK();

try{
    const response = await client.auth().universalAuth.login({
        clientId:process.env.INFISICAL_CLIENT_ID,
        clientSecret:process.env.INFISICAL_CLIENT_SECRET
    })
    console.log(response.auth)
}
catch(err){
    console.error(err);
}

const secret = client.secrets