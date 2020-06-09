import knex from 'knex';

const connection = knex ({
    client: 'pg',
    connection: {
        user : 'postgres',
        password : 'postgres',
        database : 'knex_test'
    },
    useNullAsDefault: true,
});



export default connection