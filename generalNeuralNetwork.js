const brain = require("brain.js");
const dataGenerator = require("./data");

module.exports = (minTemp, maxTemp, counter) => {
  const network = new brain.NeuralNetwork();
  let trainData = dataGenerator(minTemp, maxTemp, counter);
  network.train(trainData);
  return network;
};
