import path from 'path';

module.exports = {

        client: 'pg',
        connection:{
            user : 'postgres',
            password : 'postgres',
            database : 'knex_test'
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        }, 
        seeds: {
            directory: path.resolve(__dirname, 'src', 'database', 'seeds')
        },
        useNullAsDefault: true,
    
};