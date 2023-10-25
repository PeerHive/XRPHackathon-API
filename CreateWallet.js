const { Web3 } = require('web3');

const web3 = new Web3('https://rpc-evm-sidechain.xrpl.org');

const account = web3.eth.accounts.create();

// Save the private key and the address of the new wallet to a secure location.
const privateKey = account.privateKey;
const address = account.address;

console.log('Private key:', privateKey);
console.log('Address:', address);