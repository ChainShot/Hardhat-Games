const hre = require("hardhat");

const GAME_ADDRESS = "0xe49daee530436061f768d54fa0a83925d5dd72ae";

async function main() {
  const Game = await hre.ethers.getContractFactory("Game");
  const game = await Game.attach(GAME_ADDRESS);

  game.on('Winner', (addr) => {
    console.log(addr + ' won!');
  });
}

main();
