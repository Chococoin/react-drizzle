const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "660595c3ff154e91a27a2db83baca6c1";
const mnemonic = require('../config/mnemonic.js');

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
    advanced: {
      port: 8777,
      network_id: 1342,
      gas: 8500000,
      gasPrice: 2000000000,
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,
      gas: 6500000,
      gasPrice: 200000000,
    }
  }
}
