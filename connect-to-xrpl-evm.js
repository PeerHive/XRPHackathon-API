const { Web3 } = require('web3');

const provider = new Web3.providers.HttpProvider('https://rpc-evm-sidechain.xrpl.org');
const web3 = new Web3(provider);

// Test the connection
web3.eth.net.isListening().then((result) => {
  if (result) {
    console.log('Connected to the XRPL EVM sidechain');
  } else {
    console.error('Failed to connect to the XRPL EVM sidechain');
  }
});