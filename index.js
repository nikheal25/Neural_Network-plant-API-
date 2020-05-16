const express = require("express");
// const asparagusNN = require("./neuralNetworks");
const neuralNet = require("./generalNeuralNetwork");
const app = express();
const port = process.env.PORT || 3000;

const totalSuggestions = 2;

// ! creattion of neural network models
const counter = 50;
const Asparagus = neuralNet(16, 30, counter);
const Basil = neuralNet(10, 27, counter);
const Beet = neuralNet(15, 26, counter);
const Black_Pepper = neuralNet(12, 30, counter);
const Broccoli = neuralNet(15, 20, counter);

const Brussels_Sprouts = neuralNet(7, 24, counter);
const Cabbage = neuralNet(4, 21, counter);
const Capsicum = neuralNet(18, 30, counter);
const Cardamom = neuralNet(17, 25, counter);
const Carrot = neuralNet(10, 24, counter);

const Cauliflower = neuralNet(16, 24, counter);
const Celery = neuralNet(5, 27, counter);
const Chicory = neuralNet(10, 24, counter);
const Chilli_Pepper = neuralNet(18, 30, counter);
const Chinese_Cabbage = neuralNet(13, 21, counter);

const Chives = neuralNet(5, 30, counter);
const Coriander = neuralNet(17, 27, counter);
const Cucumber = neuralNet(15, 30, counter);
const Dill = neuralNet(15, 32, counter);
const Eggplant = neuralNet(21, 32, counter);

const Endive = neuralNet(15, 24, counter);
const Garden_Cress = neuralNet(13, 24, counter);
const Garlic = neuralNet(9, 28, counter);
const Ginger = neuralNet(15, 30, counter);
const Horseradish = neuralNet(7, 23, counter);

const Kale = neuralNet(4, 21, counter);
const Kiwifruit = neuralNet(5, 35, counter);
const Kohlrabi = neuralNet(7, 24, counter);
const Leek = neuralNet(13, 24, counter);
const consttuce = neuralNet(15, 25, counter);

const Mustard_Greens = neuralNet(10, 35, counter);
const Okra = neuralNet(18, 32, counter);
const Onion = neuralNet(8, 30, counter);
const Oregano = neuralNet(15, 25, counter);
const Parsley = neuralNet(7, 20, counter);
//

app.get("/", (req, res) => {
  //   res.set("Content-Type", "text/plain");
  res.json({ message: "hello" });
});

app.get("/suggestions", (req, res) => {
  const minTemp = 0;
  const maxTemp = 15;

  const Asparagusprob = Asparagus.run([minTemp, maxTemp])[0];
  const Basilprob = Basil.run([minTemp, maxTemp])[0];
  const Beetprob = Beet.run([minTemp, maxTemp])[0];
  const Black_Pepperprob = Black_Pepper.run([minTemp, maxTemp])[0];
  const Broccoliprob = Broccoli.run([minTemp, maxTemp])[0];
  const Brussels_Sproutsprob = Brussels_Sprouts.run([minTemp, maxTemp])[0];
  const Cabbageprob = Cabbage.run([minTemp, maxTemp])[0];
  const Capsicumprob = Capsicum.run([minTemp, maxTemp])[0];
  const Cardamomprob = Cardamom.run([minTemp, maxTemp])[0];
  const Carrotprob = Carrot.run([minTemp, maxTemp])[0];
  const Cauliflowerprob = Cauliflower.run([minTemp, maxTemp])[0];
  const Celeryprob = Celery.run([minTemp, maxTemp])[0];
  const Chicoryprob = Chicory.run([minTemp, maxTemp])[0];

  const Chilli_Pepperprob = Chilli_Pepper.run([minTemp, maxTemp])[0];
  const Chinese_Cabbageprob = Chinese_Cabbage.run([minTemp, maxTemp])[0];
  const Chivesprob = Chives.run([minTemp, maxTemp])[0];
  const Corianderprob = Coriander.run([minTemp, maxTemp])[0];
  const Cucumberprob = Cucumber.run([minTemp, maxTemp])[0];
  const Dillprob = Dill.run([minTemp, maxTemp])[0];
  const Eggplantprob = Eggplant.run([minTemp, maxTemp])[0];
  const Endiveprob = Endive.run([minTemp, maxTemp])[0];
  const Garden_Cressprob = Garden_Cress.run([minTemp, maxTemp])[0];
  const Garlicprob = Garlic.run([minTemp, maxTemp])[0];
  const Gingerprob = Ginger.run([minTemp, maxTemp])[0];
  const Horseradishprob = Horseradish.run([minTemp, maxTemp])[0];
  const Kaleprob = Kale.run([minTemp, maxTemp])[0];

  const Kiwifruitprob = Kiwifruit.run([minTemp, maxTemp])[0];
  const Kohlrabiprob = Kohlrabi.run([minTemp, maxTemp])[0];
  const Leekprob = Leek.run([minTemp, maxTemp])[0];
  const consttuceprob = consttuce.run([minTemp, maxTemp])[0];
  const Mustard_Greensprob = Mustard_Greens.run([minTemp, maxTemp])[0];
  const Okraprob = Okra.run([minTemp, maxTemp])[0];
  const Onionprob = Onion.run([minTemp, maxTemp])[0];
  const Oreganoprob = Oregano.run([minTemp, maxTemp])[0];
  const Parsleyprob = Parsley.run([minTemp, maxTemp])[0];

  var finalResult = [
    { key: "Asparagus", value: Asparagusprob },
    { key: "Basil", value: Basilprob },
    { key: "Beet", value: Beetprob },
    { key: "Black Pepper", value: Black_Pepperprob },
  ];

  finalResult = finalResult.sort((obj1, obj2) => {
    return obj2.value - obj1.value;
  });
  console.table(finalResult);

  var cropList = "";
  finalResult.forEach((obj, i) => {
    if (i <= totalSuggestions) {
      cropList = cropList.concat(obj.key);
    }
    if (i < totalSuggestions) {
      cropList = cropList.concat(",");
    }
  });
  console.log(cropList);
  // "Asparagus,Broccoli,Brussels Sprouts,Garlic,Kale,Kohlrabi,Onion,Celery,Kohlrabi,Mustard Greens,Peanut",
  res.json({
    crops: cropList,
  });
});

app.post("/post", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on ${port} port!`));
