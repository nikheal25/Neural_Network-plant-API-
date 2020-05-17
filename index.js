const express = require("express");
const neuralNet = require("./generalNeuralNetwork");
const app = express();
const port = process.env.PORT || 3000;

const totalSuggestions = 10;

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
const Lettuce = neuralNet(15, 25, counter);
const Mustard_Greens = neuralNet(10, 35, counter);
const Okra = neuralNet(18, 32, counter);
const Onion = neuralNet(8, 30, counter);
const Oregano = neuralNet(15, 25, counter);
const Parsley = neuralNet(7, 20, counter);
const Parsnip = neuralNet(15, 20, counter);
const Peanut = neuralNet(15, 34, counter);
const Pineapple = neuralNet(23, 32, counter);
const Potato = neuralNet(12, 27, counter);
const Radish = neuralNet(5, 20, counter);
const Raspberry = neuralNet(10, 25, counter);
const Rhubarb = neuralNet(5, 20, counter);
const Rosemary = neuralNet(6, 24, counter);
const Sage = neuralNet(10, 25, counter);
const Shallots = neuralNet(13, 24, counter);
const Spinach = neuralNet(-7, 21, counter);
const Strawberry = neuralNet(2, 30, counter);
const Sugarcane = neuralNet(26, 33, counter);
const Thyme = neuralNet(4, 28, counter);
const Tomato = neuralNet(21, 29, counter);
const Turnip = neuralNet(10, 18, counter);
const Watermelon = neuralNet(18, 28, counter);
//

app.get("/suggestions", (req, res) => {
  var minTemp = 15;
  var maxTemp = 20;
  typeof req.query.tempLow === "undefined"
    ? (min = 15)
    : (min = req.query.tempLow);
  typeof req.query.tempHigh === "undefined"
    ? (max = 20)
    : (max = req.query.tempHigh);

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
  const Lettuceprob = Lettuce.run([minTemp, maxTemp])[0];
  const Mustard_Greensprob = Mustard_Greens.run([minTemp, maxTemp])[0];
  const Okraprob = Okra.run([minTemp, maxTemp])[0];
  const Onionprob = Onion.run([minTemp, maxTemp])[0];
  const Oreganoprob = Oregano.run([minTemp, maxTemp])[0];
  const Parsleyprob = Parsley.run([minTemp, maxTemp])[0];
  const Parsnipprob = Parsnip.run([minTemp, maxTemp])[0];
  const Peanutprob = Peanut.run([minTemp, maxTemp])[0];
  const Pineappleprob = Pineapple.run([minTemp, maxTemp])[0];
  const Potatoprob = Potato.run([minTemp, maxTemp])[0];
  const Radishprob = Radish.run([minTemp, maxTemp])[0];
  const Raspberryprob = Raspberry.run([minTemp, maxTemp])[0];
  const Rhubarbprob = Rhubarb.run([minTemp, maxTemp])[0];
  const Rosemaryprob = Rosemary.run([minTemp, maxTemp])[0];
  const Sageprob = Sage.run([minTemp, maxTemp])[0];
  const Shallotsprob = Shallots.run([minTemp, maxTemp])[0];
  const Spinachprob = Spinach.run([minTemp, maxTemp])[0];
  const Strawberryprob = Strawberry.run([minTemp, maxTemp])[0];
  const Sugarcaneprob = Sugarcane.run([minTemp, maxTemp])[0];
  const Thymeprob = Thyme.run([minTemp, maxTemp])[0];
  const Tomatoprob = Tomato.run([minTemp, maxTemp])[0];
  const Turnipprob = Turnip.run([minTemp, maxTemp])[0];
  const Watermelonprob = Watermelon.run([minTemp, maxTemp])[0];

  var finalResult = [
    { key: "Asparagus", value: Asparagusprob },
    { key: "Basil", value: Basilprob },
    { key: "Beet", value: Beetprob },
    { key: "Black Pepper", value: Black_Pepperprob },
    { key: "Broccoli", value: Broccoliprob },
    { key: "Brussels Sprouts", value: Brussels_Sproutsprob },
    { key: "Cabbage", value: Cabbageprob },
    { key: "Capsicum", value: Capsicumprob },
    { key: "Cardamom", value: Cardamomprob },
    { key: "Carrot", value: Carrotprob },
    { key: "Cauliflower", value: Cauliflowerprob },
    { key: "Celery", value: Celeryprob },
    { key: "Chicory", value: Chicoryprob },
    { key: "Chilli Pepper", value: Chilli_Pepperprob },
    { key: "Chinese Cabbage", value: Chinese_Cabbageprob },
    { key: "Chives", value: Chivesprob },
    { key: "Coriander", value: Corianderprob },
    { key: "Cucumber", value: Cucumberprob },
    { key: "Dill", value: Dillprob },
    { key: "Eggplant", value: Eggplantprob },
    { key: "Endive", value: Endiveprob },
    { key: "Garden Cress", value: Garden_Cressprob },
    { key: "Garlic", value: Garlicprob },
    { key: "Ginger", value: Gingerprob },
    { key: "Horseradish", value: Horseradishprob },
    { key: "Kale", value: Kaleprob },
    { key: "Kiwifruit", value: Kiwifruitprob },
    { key: "Kohlrabi", value: Kohlrabiprob },
    { key: "Leek", value: Leekprob },
    { key: "Lettuce", value: Lettuceprob },
    { key: "Mustard Greens", value: Mustard_Greensprob },
    { key: "Okra", value: Okraprob },
    { key: "Onion", value: Onionprob },
    { key: "Oregano", value: Oreganoprob },
    { key: "Parsley", value: Parsleyprob },
    { key: "Parsnip", value: Parsnipprob },
    { key: "Peanut", value: Peanutprob },
    { key: "Pineapple", value: Pineappleprob },
    { key: "Potato", value: Potatoprob },
    { key: "Radish", value: Radishprob },
    { key: "Raspberry", value: Raspberryprob },
    { key: "Rhubarb", value: Rhubarbprob },
    { key: "Rosemary", value: Rosemaryprob },
    { key: "Sage", value: Sageprob },
    { key: "Shallots", value: Shallotsprob },
    { key: "Spinach", value: Spinachprob },
    { key: "Strawberry", value: Strawberryprob },
    { key: "Sugarcane", value: Sugarcaneprob },
    { key: "Thyme", value: Thymeprob },
    { key: "Tomato", value: Tomatoprob },
    { key: "Turnip", value: Turnipprob },
    { key: "Watermelon", value: Watermelonprob },
  ];

  finalResult = finalResult.sort((obj1, obj2) => {
    return obj2.value - obj1.value;
  });
  // console.table(finalResult);

  var cropList = "";
  finalResult.forEach((obj, i) => {
    if (i <= totalSuggestions) {
      cropList = cropList.concat(obj.key);
    }
    if (i < totalSuggestions) {
      cropList = cropList.concat(",");
    }
  });
  // console.log(cropList);
  // "Asparagus,Broccoli,Brussels Sprouts,Garlic,Kale,Kohlrabi,Onion,Celery,Kohlrabi,Mustard Greens,Peanut",
  res.json({
    crops: cropList,
  });
});

app.get('/', (req, res) => {
  res.send('surver is up')
})

app.listen(port, () => console.log(`Example app listening on ${port} port!`));
