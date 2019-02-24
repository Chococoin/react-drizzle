const Bank = artifacts.require('./Bank.sol');

module.exports = deployer => {
    deployer.deploy(Bank, 1000);
}