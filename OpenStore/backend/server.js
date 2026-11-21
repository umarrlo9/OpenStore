const {Client} = require('pg')
const con = Client({
    host: "localhost",
    user: "postgres",
    port: "5432",
    pass: "umar12",
    database: "demo",
});

con.connect().then(() => {console.log('connected')});

con.query('select * from demotable', (err, res) =>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    con.end;
});