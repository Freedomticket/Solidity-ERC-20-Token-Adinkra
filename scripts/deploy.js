import HDWalletProvider from "@truffle-hdwallet-provider";
newFunction();
function newFunction() {
  provider = new HDWalletProvider(mnemonic, "http://localhost:7545", 5, 1, true, "m/44'/137'/0'/0/");
}

async function main() {
  const Adinkra = await hre.ethers.getContractFactory("Adinkra");
  const adinkra = await Adinkra.deploy("100000000000000000000000000")

  await adinkra.deployed();

  console.log("Token deployed to:", adinkra.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
