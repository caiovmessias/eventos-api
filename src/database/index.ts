import { createConnection } from 'typeorm';
import { getConnectionOptions, ConnectionOptions } from 'typeorm';

const getOptions = async () => {
  let connectionOptions: ConnectionOptions;
  connectionOptions = {
    type: 'postgres',
    synchronize: false,
    logging: false,
    ssl: {
      rejectUnauthorized: false
    },
    entities: [ "dist/app/entities/*.js" ],
  };
  if (process.env.DATABASE_URL) {
    Object.assign(connectionOptions, { url: process.env.DATABASE_URL });
  } else {
    connectionOptions = await getConnectionOptions(); 
  }

  return connectionOptions;
};

const connect2Database = async (): Promise<void> => {
    const typeormconfig = await getOptions();
    await createConnection(typeormconfig);
};

connect2Database().then(async () => {
    console.log('Connected to database');
});