const Web3 = require('web3');

const fs = require('fs'); // Built-in dependency for file streaming
const solc = require('solc'); // The Solidity compiler

// Reads the file 
const content = fs.readFileSync('./HelloWorld.sol', 'utf-8'); 

// Formats the input for solc compiler
const input = {
    language: 'Solidity',
    sources: {
        'HelloWorld.sol': {
            content, // The imported content
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

// console.log(output); // Log the result

// Set up a provider
const provider = new Web3.providers.HttpProvider("http://localhost:8545");

// Connect to the network and save it as "web3"
const web3 = new Web3(provider);

// Get the compiled contract's abi (interface)
const { HelloWorld } = output.contracts['HelloWorld.sol'];
const { abi, evm } = HelloWorld 

// Initialize a new contract object:
const contract = new web3.eth.Contract(abi);

//console.log(contract);
