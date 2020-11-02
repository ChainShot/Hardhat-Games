const GAME_ADDRESS = "0x"

async function main() {
  const Game = await hre.ethers.getContractFactory("Game");
  const game = await Game.attach(GAME_ADDRESS);

  await new Promise((resolve, reject) => {
    game.on('Winner', (addr) => {
      console.log(addr + ' won!');
      resolve(addr);
    });
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
