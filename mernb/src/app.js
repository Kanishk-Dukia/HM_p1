const express = require('express')
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/registers");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path)

// console.log(path.join(__dirname,"../public"));


app.get('/', (req, res) => {
  res.render("index")
})

app.get("/register", (req, res) => {
  res.render("register");
})


// create a new user in out database
app.post("/register", async (req, res) => {
  try {

    const password = req.body.password;
    const cpassword = req.body.confirm_password;

    if (password === cpassword) {

      const registerEmployee = new Register({
        Full_name: req.body.Full_name,
        password: password,
        confirm_password :cpassword,
        Scholar_Number:req.body.Scholar_Number,
        Phone_no:req.body.Phone_no,
        Email:req.body.Email,
        DOBs:req.body.DOBs,
        Year_of_study:req.body.Year_of_study,
        Course:req.body.Course,
        Gender:req.body.Gender
         
      })

      const registered = await registerEmployee.save();
      res.status(201).render("index");
    }
    else {
      res.send("password not matching");
    }


  } catch (error) {
    res.status(400).send(error);
  }
})

app.listen(port, () => {
  console.log(`server is running at port no ${port} `);
})