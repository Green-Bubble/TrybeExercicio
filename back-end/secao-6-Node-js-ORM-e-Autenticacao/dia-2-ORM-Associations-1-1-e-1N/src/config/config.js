require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'trybe_blog_comment',
    host: process.env.DATABASE_HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'trybe_blog_comment',
    host: process.env.DATABASE_HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'trybe_blog_comment',
    host: process.env.DATABASE_HOSTNAME,
    dialect: 'mysql',
  },
};
