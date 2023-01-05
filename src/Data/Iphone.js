const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

let app = express();

// let data;

// Middle ware to have access to the frontend;
app.use(cors());
app.use(express.json());

let port = 430;

app.listen(430, (err) => {
  if (err) console.log(err);
  console.log(`connected to port ${port}`);
});

// Middle ware to extract info from the html
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Middle ware to have access to the frontend
app.use(cors());
app.use(express.json());

let connection = mysql.createConnection({
  host: "localhost",
  user: "myDBuser",
  password: "evangadi",
  database: "mydbuser",
});

// connection.connect(console.log("connected"));

// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// To select data from a table in MySQL, use the "SELECT" statement.
// example:
// Select all records from the "customers" table, and display the result object:
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword",
//   database: "mydb"
// });

// const datafunction = () => {
//   connection.connect(function (err) {
//     if (err) throw err;
//     connection.query("SELECT * FROM product", function (err, result, fields) {
//       if (err) throw err;
//       console.log("Connected!");
//       // console.log(result[0].product_name);

//       data = result;
//       console.log(data);

//       data.map((item) => {
//         console.log(item.product_name);

//       });

//       // console.log(result);
//     });

//   });
//   return data;
// };

app.get("/product", (req, res) => {
  let result =
    "SELECT product.product_id, product.product_name, productprice.starting_price,productprice.price_range,productdescription.product_brief_description, productdescription.product_description , productdescription.product_img , productdescription.product_link FROM product JOIN productprice ON productprice.product_id= product.product_id JOIN productdescription ON productprice.product_id=productdescription.product_id";

  connection.query(
    result,

    function (err, result, fields) {
      if (err) throw err;

      res.send(result);
    }
  );
});

// app.get("/product/:product_id", (req, res) => {

//   const fetchid = req.params.product_id;
//   let result =
//     "SELECT * FROM product JOIN productprice ON productprice.product_id= product.product_id JOIN productdescription ON productprice.product_id=productdescription.product_id WHERE product.product_id=?";

//   connection.query(
//     result,fetchid,

//     function (err, results, fields) {
//       if (err) throw err;
//       res.send(results);
//     }
//   );
// });
