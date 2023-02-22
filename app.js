// Packages Installed :- npm init -y ; npm i express ; npm i nodemon -g

const express = require("express");
const app = express(); // app Means it is executable function of express
const Products_routes = require("./routes/product");

const PORT = process.env.PORT || 5000;

// When building an API using a web framework like Express.js, the app.use() method is used to add special functions called "middleware" to your application. Middleware functions are like small helper functions that run every time your API receives a request or sends a response.
app.get("/", (req, res) => {
    res.send("<h1> Hi, I am live </h1>");
})

app.use("/api/products", Products_routes);

const start = async () => {
    try{
        app.listen(PORT, () => {
           console.log(`${PORT} port successfully connected to server`);
        });
    }catch(error){
        console.warn(error);
    }
}
start();