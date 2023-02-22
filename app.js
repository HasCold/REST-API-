// Packages Installed :- npm init -y ; npm i express ; npm i nodemon -g

const express = require("express");
const app = express(); // app Means it is executable function of express

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("<h1> Hi, I am live </h1>");
})

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