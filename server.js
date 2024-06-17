import app from './index.js';

let port = process.env.PORT || 2020;

app.listen(port,()=>{
    console.log(` Server is up on ${port}`);
});