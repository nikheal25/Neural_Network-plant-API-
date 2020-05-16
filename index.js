const express = require("express");
const asparagusNN = require("./neuralNetworks");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("app-------------------");
  //   res.set("Content-Type", "text/plain");
  res.json({ message: "hello" });
});

app.get("/suggestions", (req, res) => {
  console.log("suggested-------------------");
  let prob = asparagusNN(10, 16);
  console.log(prob);

  res.json({
    crops:
      "Asparagus,Broccoli,Brussels Sprouts,Garlic,Kale,Kohlrabi,Onion,Celery,Lettuce,Kohlrabi,Mustard Greens,Peanut",
  });
});

app.post("/post", (req, res) => {
  console.log("post----------------------------------");
  res.set("Content-Type", "text/plain");
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on ${port} port!`));
