const GAME_ADDRESS = "0xe49daee530436061f768d54fa0a83925d5dd72ae";

async function main() {
  const Game = await hre.ethers.getContractFactory("Game");
  const game = await Game.attach(GAME_ADDRESS);

  const tx = await game.win();
  const receipt = await tx.wait();

  console.log(receipt);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
