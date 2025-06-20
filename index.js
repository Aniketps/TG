    require("dotenv").config();
let app = require("./src/app.js");
let conn = require("./db.js");
let router = require("./src/routers/router.js");


app.use("/", router);

let port = process.env.PORT;
let link = process.env.LINK;
app.listen(port, ()=>{
    console.log(`Server is started...`);
});