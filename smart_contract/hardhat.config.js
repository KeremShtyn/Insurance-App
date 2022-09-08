require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/_DtEaa4INDqT5nSl9R7pJwlU7Zn69MwJ",
      accounts: ['5311522142fc95cf7ee566f524cf4f5430ea83e52ba8c93d2dbd4dd1c354216e']
    }
  }
};
