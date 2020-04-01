// https://nu2g9mgvs4.execute-api.us-east-1.amazonaws.com/v1/verify?cep=12399999999

exports.handler = async (event) => {
    
    const cep = event.queryStringParameters.cep
    
    if (cep.length >= 8 && cep.includes('-')){
        return {
            statusCode: 200,
            body: JSON.stringify(true),
        };
    } else {
         return {
            statusCode: 200,
            body: JSON.stringify(false),
        };
    }
    
};