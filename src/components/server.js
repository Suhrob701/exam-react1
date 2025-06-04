const express = require("express");
const cors = require("cors");
const app = express();

const products = [
  {
    id: 1,
    img: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1689180417/758664_FACK7_9768_001_084_0000_Light.jpg",
    name: "Gucci duffle bag",
    price: 960,
    aksiya: "17%",
    reting: 4.5
  },
  {
    id: 2,
    img: "https://www.jumbo-computer.com/cdn/shop/files/2YM-000R-00214-03_800x.png?v=1721293152",
    name: "RGB Liquid CPU Cooler",
    price: 1960,
    aksiya: false,
    reting: 4.5
  }
];

app.use(cors());

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("Server ishga tushdi: http://localhost:3000");
});
