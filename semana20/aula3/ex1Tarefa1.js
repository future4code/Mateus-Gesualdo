// https://1gfpqkmsef.execute-api.us-east-1.amazonaws.com/v1/test 

exports.handler = async (event) => {
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(JSON.parse(event.body).key)
    };
    return response;
};
