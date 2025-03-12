# Why do leading zeros matter?

Primarily, vanity addresses are for aesthetics and signaling purposes. However they do provide a practical benefit: gas savings. If your contract is a token or is otherwise interacted with by other contracts (e.g. if a user needs to make an ERC20 allowance to your contract) the user will save gas based on the amount of zero **bytes** in your address. This is because Ethereum charges 16 gas / non-zero byte of calldata but only 4 for zero bytes.

Furthermore if you design your contracts with vanity addresses in mind you could save gas by being able to pack more values into the same storage slot. Instead of taking up 20 bytes you can now truncate such that it only takes up 14 bytes (12 leading zero address).
