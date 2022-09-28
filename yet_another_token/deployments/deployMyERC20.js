
const main = async () => {
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying from ${deployer} account`);

    const Token = await ethers.getContractFactory("MyERC20");
    const myToken = await Token.deploy("KekerOnlineToken", "KOT");
    console.log(`Token contract adress: ${myToken.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
