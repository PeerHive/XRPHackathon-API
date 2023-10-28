console.log("ABI Function starting")
const { Web3 } = require('web3');
const contractABI = require('./abi.json');
const { result } = require('underscore');
const { accounts } = '0x70688c9299749910a2b6811917D20Da88ba05E83'
const contractAddress = '0xdb3291ab44244f25427b8266fb65676e8636a96c';

const createMetaMaskProvider = require('metamask-extension-provider')
const provider = createMetaMaskProvider()


const web3 = new Web3('https://rpc-evm-sidechain.xrpl.org');
const contract = new web3.eth.Contract(contractABI, contractAddress);
//Hardcode for all address and id
const address = '0xCDE7E7DF0F0f17E8d5453B6381a0b0D6B7E6bdB1'; 
const id = '1440002';
//List of account 
const account = '0xCDE7E7DF0F0f17E8d5453B6381a0b0D6B7E6bdB1';
const amount = 1000;

//xCDE7E7DF0F0f17E8d5453B6381a0b0D6B7E6bdB1 {Borrower}
//0xB327188B279eC1E3CeaF98A3628B71160f5914b5 (Lender)


/*async function approve() {
    try {
      const receipt = await contract.methods.approve(amount).send({ from: fromAddress });
      console.log('Transaction receipt:', receipt);
    } catch (error) {
        console.log(fromAddress)
      console.error('Error executing transaction:', error);
    }
  }
  approve();*/


  async function balanceOf(){
    try{
        const result = await contract.methods.balanceOf(address, id).call();
        console.log('Balance of:', result);
    }catch(error){
        console.error('Error:', error);
    }
  }
  balanceOf()

  //This is eth functions, not in use
    async function balanceOfBatch(){
    try{

        const result = await contract.methods.balanceOfBatch([account], [id]).call();
        console.log(account);
        console.log('Balance of Batch:', result);
    }catch(error){
        console.error('Error:', error);
    }
  }
  


  async function balances(){
    try{
        const result = await contract.methods.balances(account).call();
        console.log('Balances:', result);
    }catch(error){
        console.error('Error:', error);
    }
  }
balances()

  async function borrowerAdd(){
    try{
        const result = await contract.methods.borrowerAdd().call();
        console.log('Borrower Add:', result);
    }catch(error){
        console.error('Error:', error);
    }
  }
  borrowerAdd()
  

  async function getCurrentTid() {
    try {
        const result = await contract.methods.currentTid().call();
        console.log('Current Tid:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getCurrentTid()

async function getDrawnBalance() {
    try {
        const result = await contract.methods.drawnBalance().call();
        console.log('Drawn Balance:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getDrawnBalance()

async function getFeePayable() {
    try {
        const result = await contract.methods.feePayable().call();
        console.log('Fee Payable:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getFeePayable()

// This is eth functions, not in use
async function isApprovedForAll(account, operator) {
    
    try {
        const result = await contract.methods.isApprovedForAll(account, operator).call();
        console.log('Is Approved for All:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}


//Lender account
async function joinLoan(amount= 1000000000000000000 , account  = '0xCDE7E7DF0F0f17E8d5453B6381a0b0D6B7E6bdB1' ) {
    try {
        const result = await contract.methods.joinLoan(amount).send({ from: account  });
        console.log('Join Loan Result:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
joinLoan()


async function getLoanDefault() {
    try {
        const result = await contract.methods.loanDefault().call();
        console.log('Loan Default:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getLoanDefault()

//Borrower account
async function loanDrawn(amount , account) {
    try {
        const result = await contract.methods.loanDrawn(amount).send({ from: account });
        console.log('Loan Drawn Result:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
//loanDrawn()

async function getLoanPeriod() {
    try {
        const result = await contract.methods.loanPeriod().call();
        console.log('Loan Period:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getLoanPeriod()

async function getLoanRate() {
    try {
        const result = await contract.methods.loanRate().call();
        console.log('Loan Rate:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getLoanRate()

//borrower address
async function loanRepayment(amount= 1000, account= '0xCDE7E7DF0F0f17E8d5453B6381a0b0D6B7E6bdB1') {
    try {
        const result = await contract.methods.loanRepayment(amount).send({ from: account });
        console.log('Loan Repayment Result:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
//loanRepayment() 

async function getLoanStatus() {
    try {
        const result = await contract.methods.loanStatus().call();
        console.log('Loan Status:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getLoanStatus()

async function getMonthlyFee() {
    try {
        const result = await contract.methods.monthlyFee().call();
        console.log('Monthly Fee:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getMonthlyFee()

async function getMonthlyRepayment() {
    try {
        const result = await contract.methods.monthlyRepayment().call();
        console.log('Monthly Repayment:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getMonthlyRepayment()

async function getOriginationNominal() {
    try {
        const result = await contract.methods.originationNominal().call();
        console.log('Origination Nominal:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getOriginationNominal()

async function getOriginationRate() {
    try {
        const result = await contract.methods.originationRate().call();
        console.log('Origination Rate:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getOriginationRate()

async function getOwner() {
    try {
        const result = await contract.methods.owner().call();
        console.log('Owner:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getOwner()

async function getPeerRate() {
    try {
        const result = await contract.methods.peerRate().call();
        console.log('Peer Rate:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getPeerRate()

async function getPrincipalAmount() {
    try {
        const result = await contract.methods.principalAmount().call();
        console.log('Principal Amount:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getPrincipalAmount()

async function getPrincipalLimit() {
    try {
        const result = await contract.methods.principalLimit().call();
        console.log('Principal Limit:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getPrincipalLimit()

async function getPrincipalPayable() {
    try {
        const result = await contract.methods.principalPayable().call();
        console.log('Principal Payable:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getPrincipalPayable()

 // This is eth functions, not in use
async function renounceOwnership(account = '0xCDE7E7DF0F0f17E8d5453B6381a0b0D6B7E6bdB1') {
    try {
        const result = await contract.methods.renounceOwnership().send({ from: account });
        console.log('Renounce Ownership Result:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}


async function getRepayment(account = '0xCDE7E7DF0F0f17E8d5453B6381a0b0D6B7E6bdB1') {
    try {
        const result = await contract.methods.repayment(account).call();
        console.log('Repayment:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getRepayment()

async function getRepaymentBalance(account = '0xCDE7E7DF0F0f17E8d5453B6381a0b0D6B7E6bdB1') {
    try {
        const result = await contract.methods.repaymentBalance(account).call();
        console.log('Repayment Balance:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getRepaymentBalance()

// This is eth functions, not in use
async function safeBatchTransferFrom(account, toAccount, ids, amounts, data) {
    try {
        const result = await contract.methods.safeBatchTransferFrom(account, toAccount, ids, amounts, data).send({ from: account });
        console.log('Safe Batch Transfer Result:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// This is eth functions, not in use
async function safeTransferFrom(account, toAccount, id, amount, data) {
    try {
        const result = await contract.methods.safeTransferFrom(account, toAccount, id, amount, data).send({ from: account });
        console.log('Safe Transfer Result:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// This is eth functions, not in use
async function setApprovalForAll(operator, account) {
    try {
        const result = await contract.methods.setApprovalForAll(operator, true).send({ from: account });
        console.log('Set Approval For All Result:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}


async function setURI(newuri = "LoanApplication002", account='0xCDE7E7DF0F0f17E8d5453B6381a0b0D6B7E6bdB1') {
    try {
        const result = await contract.methods.setURI(newuri).send({ from: account });
        console.log('Set URI Result:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
//setURI()

// This is eth functions, not in use
async function supportsInterface(interfaceId) {
    try {
        const result = await contract.methods.supportsInterface(interfaceId).call();
        console.log('Supports Interface:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getTokenId(id  = '1440002') {
   
    try {
        const result = await contract.methods.tokenId(id).call();
        console.log('Token ID:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getTokenId()

async function getTotalPayable() {
    try {
        const result = await contract.methods.totalPayable().call();
        console.log('Total Payable:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getTotalPayable()

// This is eth functions, not in use
async function transferOwnership(newOwner, account) {
    try {
        const result = await contract.methods.transferOwnership(newOwner).send({ from: account });
        console.log('Transfer Ownership Result:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}


async function getURI(id = '1440002') {
    try {
        const result = await contract.methods.uri(id).call();
        console.log('URI:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
getURI()

//Lender account
async function withdrawal(lender, amount, account) {
    try {
        const result = await contract.methods.withdrawal(lender, amount).send({ from: account });
        console.log('Withdrawal Result:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
//withdrawal()

//Lender Account
async function withdrawalApproval(account) {
    try {
        const result = await contract.methods.withdrawalApproval().send({ from: account });
        console.log('Withdrawal Approval Result:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
//withdrawalApproval()

module.exports = {
    joinLoan,
  };


  






