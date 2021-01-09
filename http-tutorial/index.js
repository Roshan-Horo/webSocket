const express = require('express');
const app = express();

app.get("/",(req,res) => {
    res.status(418)
    res.sendFile(`${__dirname}/index.html`);
})

app.listen(8080,console.log("server is running at port 8080"));