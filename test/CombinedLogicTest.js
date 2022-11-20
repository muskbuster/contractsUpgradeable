const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Deployment", function() {
    it('works', async () => {

      const Liquidity = await ethers.getContractFactory("LiquidityPool");
      const DEX = await ethers.getContractFactory("htlc");
      const Treasury = await ethers.getContractFactory("TreasuryPool");
      const Apy = await ethers.getContractFactory("Apy");
      const USDmock = await ethers.getContractFactory("TESTUSD");

      const instance = await upgrades.deployProxy(Liquidity, []);
      const instance2 = await upgrades.deployProxy(DEX, []);
      const instance3= await upgrades.deployProxy(Treasury, []);
      const instance4 = await USDmock.deploy();

      return instance.address;
    });
  });
