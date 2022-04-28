import express from "express"
const app = express();
const port = 3001;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)
})

app.get('/', (req,res,err)=>{
    res.send("This is an API which returns hello with your name")
})

app.get('/:name', (req,res)=>{
    let name = req.params.name;
    res.send(`Hello ${name.charAt(0).toUpperCase() + name.slice(1)}`);
})