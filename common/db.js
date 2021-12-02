import mysql from 'mysql';

export const connection = mysql.createConnection({
  host: '192.168.8.35',
  user: 'periodico',
  password: 'periodico',
  database: 'periodico',
});
