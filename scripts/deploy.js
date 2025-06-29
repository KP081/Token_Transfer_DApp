const hre = require("hardhat");

async function main() {
    const MyToken = await hre.ethers.getContractFactory("MyToken");
    const token = await MyToken.deploy();
    await token.waitForDeployment();
    console.log("MyToken deploy to : " , await token.getAddress());
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});