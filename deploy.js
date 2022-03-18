const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'call glow acoustic vintage front ring trade assist shuffle mimic ',
    'https://rinkeby.infura.io/v3/49e156b9083e4355b5b093a734b4e44e'
);

const web3 = new Web3(provider);

// const deploy = async () => {
//     const accounts = await web3.eth.getAccounts();

//     console.log('Attempting to deploy from account', accounts[0]);

//     const result = await new web3.eth.Contract(JSON.parse(interface))
//     .deploy({ data: bytecode, arguments: ['Hi there!'] })
//     .send ({gas: '1000000', from: accounts[0] });
//     console.log('Contract deployed to', result.option.address);
//     provider.engine.stop();
// };

// deploy();