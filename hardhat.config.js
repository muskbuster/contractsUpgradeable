require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // url: '127.0.0.1',
      accounts: [
        {
          privateKey:
            "0x8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61",
          balance:
            "1000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        },
      ],
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY],
    },
    bitgertTestnet: {
      url: `https://testnet-rpc.brisescan.com`,
      accounts: {
        mnemonic:
          "coyote stuff tired ancient flat practice state urban trade tonight sentence cry",
      },
    },

    goerli: {
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: [process.env.PRIVATE_KEY],
    },

    bsctestnet: {
      url: "https://rpc.ankr.com/bsc_testnet_chapel",
      accounts: [process.env.PRIVATE_KEY],
    },

    //polygon, bsc, eth
    polygon: {
      url: "https://polygon-rpc.com",
      accounts: [process.env.PRIVATE_KEY],
    },
    bsc: {
      url: "https://bsc-dataseed1.binance.org",
      accounts: [process.env.PRIVATE_KEY],
    },
    eth: {
      url: "https://rpc.ankr.com/eth",
      accounts: [process.env.PRIVATE_KEY],
    },
    bitgert: {
      url: "https://chainrpc.com",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
