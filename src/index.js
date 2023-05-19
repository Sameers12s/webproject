const express = require('express');
const path = require("path");
const app = express();
const port = 4000;
const hbs = require("hbs");

//built in middle ware
const staticPath = (path.join(__dirname, '../public'));
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");


//to set the view engine
app.set("view engine","hbs");
app.set('views', templatePath);
hbs.registerPartials(partialsPath);


app.use(express.static(staticPath));



//Routing
app.get("", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about")
});
app.get("/weather", (req, res) => {
    res.render("weather")
});
app.get("*", (req, res) => {
    res.send("OOPS page not found")
});
app.listen(port, () => {
    console.log(`Listening to the port at ${port}`)
})