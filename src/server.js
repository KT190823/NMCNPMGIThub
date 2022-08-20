import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from './config/connectDB';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

configViewEngine(app);
initWebRoutes(app);

connectDB();

let port = 3000;

app.listen(port, () => {
    console.log("Running on http://localhost:" + port)
})