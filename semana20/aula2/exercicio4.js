exports.handler = async (event) => {
    
    const text = event.text
    
    if (!text.includes("@")) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                isEmail: false,
                reason: "Missing '@' " 
            }),
        };
    }
    
     if (!text.includes(".")) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                isEmail: false,
                reason: "Missing '.' " 
            }),
        };
    }
    
    return {
        statusCode: 200,
        body: JSON.stringify({isEmail: true}),
    };
};
