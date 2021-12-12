
//git config --global user.email "yazeedk643@gmail.com"


require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const app = express();
const all =  require("./controllers/userController.js");
// Middleware
app.use(express.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/user", require("./routes/userRouters"));
 
// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});


app.route('/users').get( (req, res) => {

  res.status(200).send(all.getAllUsers());
  
}); 

 app.route('/users').get((req, res) => {
   res.status(200).send('Ok');
 }); 

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
