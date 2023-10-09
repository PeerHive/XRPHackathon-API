const xrpl = require('xrpl');
const cc = require('five-bells-condition');
const database = require("../models/databases");
const { XummSdk } = require('xumm-sdk');

const xumm_api = process.env.XUMM_API;
const xumm_secret = process.env.XUMM_SECRET;

async function xrpCTC(collectionName) {
    const {client, db} = await database.rippleDatabase();
    const collection = db.collection(collectionName);
    return (client, collection);
};

async function CTC(collectionName) {
    const {client, db} = await database.databaseConnection();
    const collection = db.collection(collectionName);
    return {client, collection}
}

const xrplMain = {
    client: async() => {
        try {
            const xumm = new XummSdk(xumm_api, xumm_secret);
            return xumm
        }
        catch (e) {
            console.error('Error in connecting to ripple ledger: /n', e);

        }
    },

    createEscrow: async(userWalletId, amount, poolId, deadline) => {
        const preimageData = crypto.randomBytes(32);
        const fulfillment = new cc.PreimageSha256();
        fulfillment.setPreimage(preimageData);
        const condition = fulfillment.getConditionBinary().toString('hex').toUpperCase();
        const fulfillment_hex = fulfillment.serializeBinary().toString('hex').toUpperCase();
        const amountToDrop = amount * 1000000;
        const {dataServer, dataCollection} = await CTC("loanPool");
        const Sdk = xrplMain.client()
        try {
            const loanPool = await dataCollection.find({loanPoolId: poolId});
            const startTimeStamp = new Date(loanPool.startDate).getTime() / 1000;
            const payload = {
                txjson: {
                    TransactionType: "EscrowCreate",
                    Account: userWalletId,
                    Destination: loanPool.walletId,
                    Amount = amountToDrop,
                    Condition: condition,
                    FinishAfter: startTimeStamp
                }
            };// Send the payload to the XUMM API and get a response object
            Sdk.payload.create(payload).then(response => {
              // Log the response object to the console
              console.log(response);
            
              // Check if the payload was successfully created
              if (response && response.uuid) {
                // Get the payload UUID
                const payloadId = response.uuid;
            
                // Subscribe to the payload status updates
                Sdk.payload.subscribe(payloadId, (error, data) => {
                  // Log any errors or data to the console
                  console.log(error, data);
            
                  // Check if the payload was opened by the user
                  if (data && data.meta && data.meta.resolved) {
                    // Unsubscribe from the payload status updates
                    Sdk.payload.unsubscribe(payloadId);
            
                    // Get the payload details
                    Sdk.payload.get(payloadId).then(details => {
                      // Log the details to the console
                      console.log(details);
            
                      // Check if the payload was signed by the user
                      if (details && details.meta && details.meta.signed) {
                        // Get the signed transaction blob
                        const txBlob = details.response.hex;
            
                        // Submit the transaction blob to the XRP ledger
                        Sdk.tx.submit(txBlob).then(result => {
                          // Log the result to the console
                          console.log(result);
            
                          // Check if the transaction was successfully submitted
                          if (result && result.engine_result) {
                            // Get the transaction hash and result code
                            const txHash = result.tx_json.hash;
                            const txResult = result.engine_result;
            
                            // Log a success message to the console
                            console.log(`Escrow created with hash: ${txHash} and result: ${txResult}`);
                          }
                        });
                      }
                    });
                  }
                });
              }
            })
        }catch (e) {
            // Pending
        }
    } 
}
