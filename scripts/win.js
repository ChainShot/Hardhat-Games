const GAME_ADDRESS = "0x"

async function main() {
  const Game = await hre.ethers.getContractFactory("Game");
  const game = await Game.at(GAME_ADDRESS);

  await game.win();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
