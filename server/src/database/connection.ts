import knex from 'knex';
import path from 'path';

/*const connection = knex ({
    client: 'pg',
    connection: {
        user : 'postgres',
        password : 'postgres',
        database : 'knex_test'
    },
    useNullAsDefault: true,
});
*/
const connection = knex ({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection