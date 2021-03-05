const Dfarm = artifacts.require("Dfarm");

module.exports = function(deployer) {
  deployer.deploy(Dfarm);
};