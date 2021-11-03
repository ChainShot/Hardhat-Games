const GAME_ADDRESS = "";

async function main() {
  const game = await hre.ethers.getContractAt("Game1", GAME_ADDRESS);

  const tx = await game.win();
  const receipt = await tx.wait();

  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
