const express = require('express')
const app = express()
const router = require('./router/index.routes')
const path = require('path')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use('/', router)


module.exports = app