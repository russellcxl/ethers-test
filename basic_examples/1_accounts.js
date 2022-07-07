const ethers = require("ethers");
require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_ID}`);

const main = async () => {
    const balance = await provider.getBalance(`0xcb3bbd24eb5cfdae35c62e84cad894c32ff1fd5e`);
    console.log(ethers.utils.formatEther(balance));
}

main();
