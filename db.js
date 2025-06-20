let mysql = require("mysql2");

let conn = mysql.createConnection({
    host:process.env.db_host,
    user:process.env.db_user,
    password:process.env.db_pass,
    database:process.env.db_name
});

conn.connect((err)=>{
    if(err){
        console.log("Error while conneting to database...");
    }else{
        console.log("Database connected...");
    }
});

module.exports = conn;