const { Web3 } = require('web3');

// Infura API key and network URL
const infuraApiKey = 'a809f4739a5f4e3b948867040d1aa9ff';
const networkUrl = `https://mainnet.infura.io/v3/${infuraApiKey}`;

// Create a Web3 instance
const web3 = new Web3(new Web3.providers.HttpProvider(networkUrl));

// Test the connection by fetching the latest block number
async function getLatestBlockNumber() {
  try {
    const latestBlockNumber = await web3.eth.getBlockNumber();
    console.log('Latest Block Number:', latestBlockNumber);
  } catch (error) {
    console.error('Error:', error);
  }
}

getLatestBlockNumber();