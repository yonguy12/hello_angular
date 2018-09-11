const express = require("express");
const routes = require("./server/routes.js");
const app = routes(express());

app.use(express.static( __dirname + "/public/dist/public" ));

app.listen(8000, (errs)=>console.log(errs?errs:"gucci"));