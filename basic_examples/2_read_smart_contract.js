const ethers = require("ethers");
require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_ID}`);
const address = `0x6B175474E89094C44Da98b954EedeAC495271d0F`
const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
]
// requires 3 info: address of the contract, abi (interfaces), provider
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    await contract.name().then(console.log)
    await contract.symbol().then(console.log)
    await contract.balanceOf(`0x6c6Bc977E13Df9b0de53b251522280BB72383700`).then(data => {console.log(ethers.utils.formatEther(data))})
}

main()