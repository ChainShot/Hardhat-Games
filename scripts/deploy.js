require('dotenv').config();
const ethers = require('ethers');

async function main() {

  // replace argument with the contract file you want to deploy!
  const Game = await hre.ethers.getContractFactory("Game1");
  const gameNumber = 1;
  const game = await Game.deploy();
  console.log(`Game ${gameNumber} deployed to address: `, game.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });