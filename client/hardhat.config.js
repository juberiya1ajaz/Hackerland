require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/contract/artifacts",
    sources: "./src/contract/contracts",
    cache: "./src/contract/cache",
    tests: "./src/contract/test"
  },
};
