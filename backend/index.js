const main = require("./db");
main();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(5000, function(){
    console.log("iNotebook backend server started at port 5000");
})



