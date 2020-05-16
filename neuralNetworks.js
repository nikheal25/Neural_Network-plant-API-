const brain = require("brain.js");
const dataGenerator = require("./data");

const network = new brain.NeuralNetwork();
let trainData = dataGenerator(10, 20, 30);
network.train(trainData);

module.exports = (minTemp, maxTemp) => {
  return network.run([minTemp, maxTemp]);
};
