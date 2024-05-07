import { DB_URL } from './config';
import { Client } from 'pg';

export const client = new Client({
    connectionString: DB_URL,
});
