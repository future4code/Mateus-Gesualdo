exports.myFunc = async function  (event){
    
    const response = {
        statusCode: 200,
        body: JSON.stringify("Olá mundo, sou uma mensagem da AWS"),
    };
    return response;
};