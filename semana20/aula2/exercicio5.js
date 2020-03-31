const knex = require("knex");

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});



exports.handler = async (event) => {

    const query = await connection.raw("SELECT * FROM future_book_users")
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(query[0][0])
    };
    return response;
};


