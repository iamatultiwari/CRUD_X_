import express from "express";
import  dotenv from "dotenv";
dotenv.config()

 const port = process.env.PORT;
const app = express();

app.use(express.json());


app.get('/' ,(req,res) => {
    res.send("hello their");

})


app.listen(port,(req,res) => {
    console.log(`server is listening at port ${port}`);
})