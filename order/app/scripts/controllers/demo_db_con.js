var mysql=require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "hem",
password: "asdf",
database: 'bookstore',
port:'8889'

//socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

con.connect(function(err){
if (err) throw err;
console.log("connected");
var sql = 'SELECT * FROM book';
con.query(sql, function(err,result,fields){
if(err) throw err;
console.log(result);
});
con.end();
});
