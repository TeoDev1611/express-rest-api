const express = require("express");
const app = express();
const moment = require("moment");
const PORT = 3000 || process.env.PORT;
const path = require("path");
const members = require("./data/Members.js");
const logger = require('./middlewares/logger')

//STATICS
app.use(express.static(path.join(__dirname, "public")));

//API REST START

// Initial middlewar
app.use(logger);

//SEND ALL MEMBERS
app.get("/api/members", (req, res) => {
  res.json(members);
});

// Get single member
app.get('/api/members/:id',(req,res) =>{
  let parameter = parseInt(req.params.id)
  const found = members.some(member => member.id == parameter)
  if (found){
    const singleMemeber = members.filter(member => member.id === parameter)
    res.json(singleMemeber)
  } else{
    res.status(400).json({msg: `No memeber with the id ${parameter}`})
  }
    
})

//BASE ROUTE
app.get("/", (req, res) => {
  res.send("I am a route");
});

//Run app
app.listen(PORT, () => {
  console.log(`Server in localhost ${PORT}`);
});
