require('dotenv').config();
const ethers = require('ethers');

async function main() {

  const url = process.env.RINKEBY_URL;

  // Change to the Game Contract you want to deploy!
  let artifacts = await hre.artifacts.readArtifact("Game1");

  // change this integer to whatever Game you are currently on!
  const gameNumber = 1;

  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  // Create an instance of a Contract Factory
  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  let game = await factory.deploy();

  console.log(`Game ${gameNumber} address: `, game.address);

  await game.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});