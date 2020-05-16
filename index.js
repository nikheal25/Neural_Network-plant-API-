const express = require("express");
// const asparagusNN = require("./neuralNetworks");
const neuralNet = require("./generalNeuralNetwork");
const app = express();
const port = process.env.PORT || 3000;

// ! creattion of neural network models
let counter = 50;
let Asparagus = neuralNet(16, 30, counter);
let Basil = neuralNet(10, 27, counter);
let Beet = neuralNet(15, 26, counter);
let Black_Pepper = neuralNet(12, 30, counter);
let Broccoli = neuralNet(15, 20, counter);

let Brussels_Sprouts = neuralNet(7, 24, counter);
let Cabbage = neuralNet(4, 21, counter);
let Capsicum = neuralNet(18, 30, counter);
let Cardamom = neuralNet(17, 25, counter);
let Carrot = neuralNet(10, 24, counter);

let Cauliflower = neuralNet(16, 24, counter);
let Celery = neuralNet(5, 27, counter);
let Chicory = neuralNet(10, 24, counter);
let Chilli_Pepper = neuralNet(18, 30, counter);
let Chinese_Cabbage = neuralNet(13, 21, counter);

let Chives = neuralNet(5, 30, counter);
let Coriander = neuralNet(17, 27, counter);
let Cucumber = neuralNet(15, 30, counter);
let Dill = neuralNet(15, 32, counter);
let Eggplant = neuralNet(21, 32, counter);

let Endive = neuralNet(15, 24, counter);
let Garden_Cress = neuralNet(13, 24, counter);
let Garlic = neuralNet(9, 28, counter);
let Ginger = neuralNet(15, 30, counter);
let Horseradish = neuralNet(7, 23, counter);

let Kale = neuralNet(4, 21, counter);
let Kiwifruit = neuralNet(5, 35, counter);
let Kohlrabi = neuralNet(7, 24, counter);
let Leek = neuralNet(13, 24, counter);
let Lettuce = neuralNet(15, 25, counter);

let Mustard_Greens = neuralNet(10, 35, counter);
let Okra = neuralNet(18, 32, counter);
let Onion = neuralNet(8, 30, counter);
let Oregano = neuralNet(15, 25, counter);
let Parsley = neuralNet(7, 20, counter);
//

app.get("/", (req, res) => {
  console.log("app-------------------");
  //   res.set("Content-Type", "text/plain");
  res.json({ message: "hello" });
});

app.get("/suggestions", (req, res) => {
  console.log("suggested-------------------");

  let prob = Asparagus.run([12, 15]);
  console.log(prob);

  prob = Basil.run([12, 15]);
  console.log(prob);
  prob = Beet.run([12, 15]);
  console.log(prob);
  prob = Black_Pepper.run([12, 15]);
  console.log(prob);
  prob = Broccoli.run([12, 15]);
  console.log(prob);
  prob = Brussels_Sprouts.run([12, 15]);
  console.log(prob);
  prob = Cabbage.run([12, 15]);

  prob = Cabbage.run([12, 15]);
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
