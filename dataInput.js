import ethers from 'ethers';


// Define the function signature and parameters
const functionName = 'buyTokensUSDT';
const parameterTypes = ['uint256', 'uint8', 'address']; // Assuming PresalePhase is an enum and is represented as uint8
const amount = '100'; // Example amount value
const phase = 1; // Example phase value (replace with the correct enum value)
const address = '0x12785FC9Ad49ABEA2dA1A019e071B88F37aC9f10';
const amountWith18Decimals = ethers.utils.parseUnits(amount, 18);
// Create the interface for the contract
const iface = new ethers.utils.Interface([`function ${functionName}(${parameterTypes.join(',')})`]);

// Encode the function data
const sc_input_data = iface.encodeFunctionData(functionName, [amountWith18Decimals, phase, address]);

console.log(sc_input_data); // This will output the encoded data
