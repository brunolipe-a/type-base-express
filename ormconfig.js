const path = process.env.NODE_ENV === 'production' ? 'dist' : 'src';
const ext = process.env.NODE_ENV === 'production' ? 'js' : 'ts';

module.exports = {
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  dropSchema: false,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
  entities: [`${path}/app/models/**/*.${ext}`],
  migrations: [`${path}/database/migrations/**/*.${ext}`],
  subscribers: [`${path}/database/subscriber/**/*.${ext}`],
  cli: {
    entitiesDir: 'src/app/models',
    migrationsDir: 'src/database/migrations',
    subscribersDir: 'src/database/subscriber',
  },
};
