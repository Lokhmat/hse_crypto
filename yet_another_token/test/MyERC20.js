const { expect } = require("chai");

describe("MyERC20.sol", function () {
  it("Deployment and mint tokens to signer account", async function () {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("MyERC20");

    const myToken = await Token.deploy("KekerOnlineToken", "KOT");

    await myToken.mint(owner.address, 20)
    const ownerBalance = await myToken.balanceOf(owner.address);
    expect(await myToken.totalSupply()).to.equal(ownerBalance);
  });
});
