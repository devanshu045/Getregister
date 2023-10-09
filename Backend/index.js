const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 8080;
const app = express();

// middle
app.use(express.json());
app.use(cors());

//connect to mongodb

mongoose.connect("mongodb://127.0.0.1:27017/loginform");

const EployeeSchema = new mongoose.Schema({
  name: {
    type: "String",
  },
  lastname: {
    type: "String",
  },
  age: {
    type: "Number",
  },
  passoword: {
    type: "String",
  },
  repassoword: {
    type: "String",
  },
});

const EmployeeModel = mongoose.model("Employee", EployeeSchema);

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user=> {
         if(user){
            if(user.passoword === password){
                  res.json("success")
            }
            else{
                res.json("the password is incorrect")
            }
         }
         else{
            res.json("no record ")
         }
    }).catch(error => {res.json("error")})
})


app.post("/register", (req, res) => {
    EmployeeModel.create(req.body)
    .then((employee) => {
        console.log(employee); // Log the created employee document
        res.json(employee);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "An error occurred" }); // Send an error response
    });
});

app.listen(PORT, (req, res) => {
  console.log("listening on port", PORT);
});
