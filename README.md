# onChain-Contracts
The Chai dex development contracts


Install Packages : `npm i`

Now you can deploy the contract using : `npx hardhat run scripts/deploy.js --network <networkName as in config file>`

Deploy only Liquidity Pool and treasury pool and INRC and ChaiT.

To set addresses in DEX : Set INRC address only on BITGERT CHAIN

Once deployed, go to remix, connect your wallet to respective network and connect to the contract by :
    Copy pasting the contract code to remix and compiling and then deploy at address in remix from the remix deploy section
    Now you can set the addresses of the deployed contract

For Liquidiy Pool, you need to call setUSDAddress on the contract for setting USD stable address.

