const express = require('express');


const routes = require('./routes/index');
const app = express();

const PORT = require('./config');

app.use(express.json());
app.use(routes);




const server = app.listen(PORT,()=>{
  console.log(`Server is listening on ${PORT}`);
})