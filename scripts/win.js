const GAME_ADDRESS = "";

async function main() {
  const game = await hre.ethers.getContractAt("IGame", GAME_ADDRESS);

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
