require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
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
      accounts: [
        "209b0e771f25902a24d908fb25eab7ef3d3d3ae44496c04f3d9d313222b682aa",
      ],
    },
    bitgert: {
      url: `https://testnet-rpc.brisescan.com`,
      accounts:{mnemonic: "coyote stuff tired ancient flat practice state urban trade tonight sentence cry"},
    },
  },
};
