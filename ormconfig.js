// import {ConnectionOptions} from "typeorm";
// import path from "path";

// const isCompiled = path.extname(__filename).includes('js');

// const fileExtension = isCompiled ? "js" : "ts";

module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "12345678",
  database: "eventos",
  entities: [
      'src/app/entities/*.ts'
  ],
  migrations: [
    'src/database/migrations/*.ts'
  ],
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'src/app/entities'
  }
};