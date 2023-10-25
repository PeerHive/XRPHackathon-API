/*
const contract = new PeerProtocol('https://peerhive.mypinata.cloud/ipfs/QmP249X61q4z1vW3y5b48J4z4X5J1g371n4875a4i6t24', '0x1234567890ABCDEF', 10000, 100, 12, 50, 100);

contract.methods.approve(10000).send({ from: 'YOUR_ACCOUNT_ADDRESS' });
contract.methods.joinLoan(1000).send({ from: 'YOUR_ACCOUNT_ADDRESS' });
contract.methods.loanDrawn(1000).send({ from: 'BORROWER_ACCOUNT_ADDRESS' });
contract.methods.loanRepayment(100).send({ from: 'BORROWER_ACCOUNT_ADDRESS' });
contract.methods.withdrawalApproval().send({ from: 'OWNER_ACCOUNT_ADDRESS' });
contract.methods.withdrawal('LENDER_ACCOUNT_ADDRESS', 100).send({ from: 'LENDER_ACCOUNT_ADDRESS' });
*/


const peerProtocol = new web3.eth.Contract(contractABI, contractAddress);

// Approve the contract to spend your tokens
peerProtocol.methods.approve(amount).send({ from: YOUR_ACCOUNT_ADDRESS });

// Join the loan
peerProtocol.methods.joinLoan(amount).send({ from: YOUR_ACCOUNT_ADDRESS });

// Draw down on the loan
peerProtocol.methods.loanDrawn(amount).send({ from: BORROWER_ACCOUNT_ADDRESS });

// Repay the loan
peerProtocol.methods.loanRepayment(amount).send({ from: BORROWER_ACCOUNT_ADDRESS });

// Withdraw your funds
peerProtocol.methods.withdrawal(lenderAddress, amount).send({ from: LENDER_ACCOUNT_ADDRESS });
 