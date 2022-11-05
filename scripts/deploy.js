// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

	console.log(
	"Deploying contracts with the account:",
	deployer.address
	);

	// console.log("Account balance:", (await deployer.getBalance()).toString())

  // const TimeLock = await hre.ethers.getContractFactory("Timelock")
  // const timeLockDeploy = await TimeLock.deploy("0x4D829adBe2EBF5D3F2452D256bc2D63aa893C779")

  // const ModifiedTimeLock = await hre.ethers.getContractFactory("ModifiedTimeLock")

  // const ModifiedTimeLockDeploy = await ModifiedTimeLock.deploy()

  // await timeLockDeploy.deployed()

  // await ModifiedTimeLockDeploy.deployed()
  // console.log(
  //   `Timelock deployed at ${timeLockDeploy.address}`
  // );
  // console.log("************************", ModifiedTimeLockDeploy.address)


    const HTLC = await hre.ethers.getContractFactory("htlc");
    const deployment = await hre.upgrades.deployProxy(HTLC,[],{
      initializer:"initialize",
    });
    await deployment.deployed();

    console.log("*******************", deployment.address)


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
