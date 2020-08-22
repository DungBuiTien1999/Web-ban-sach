const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
  connectionLimit : 50,
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'Root29031999',
  database : 'hethongbanhangeshopping'
});

const mysql_query = util.promisify(pool.query).bind(pool)

module.exports = {
    load: (sql) => mysql_query(sql),
    insert:(sql)=>mysql_query(sql),
  }