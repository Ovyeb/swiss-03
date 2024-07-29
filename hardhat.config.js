require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

console.log("Loaded environment variables:");
console.log("PRIVATE_KEY:", process.env.PRIVATE_KEY);

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", // URL of the RPC node for Swisstronik.
      accounts: [process.env.PRIVATE_KEY], // Use the private key from the .env file directly.
      // Make sure you have enough funds in this wallet to deploy the smart contract.
    },
  },
};

