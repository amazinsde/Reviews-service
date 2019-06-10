require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/dbmigration'
    },
    seeds: {
      directory: __dirname + '/db/dbseeds'
    }
  } 
}

// require('dotenv').config()

// module.exports = { 
//   development: { 
//     client: 'postgresql', 
//     connection: { 
//       host: process.env.DB_HOST, 
//       user: process.env.DB_USER, 
//       password: process.env.DB_PASSWORD, 
//       database: process.env.DB_NAME
//     }, 
//     // `postgres://localhost:5432/${reviews}`, 
//     migrations: { 
//       directory: __dirname + '/db/migrations' 
//     },
//     seeds: { 
//       directory: __dirname + '/db/seeds'
//     } 
//   }
// }