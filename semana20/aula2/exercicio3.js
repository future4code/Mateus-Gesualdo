exports.addNumbers = async (event) => {
    
    const num1 = event.numbers[0]
    const num2 = event.numbers[1]
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            sum: num1 + num2
        })
    };
    return response;
};
