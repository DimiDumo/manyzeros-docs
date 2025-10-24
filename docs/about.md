---
sidebar_position: 1
slug: '/'
---

# Intro

Many Zeros gives you a secure and trust minimized way to deploy
your EVM smart contracts to the same vanity address across
chains.

## Quickstart - Foundry

1. Install the SDK by running `forge install philogy/manyzeros-foundry`
2. Import in your deploy script `import {MANY_ZEROS} from "manyzeros-foundry/IManyZeros.sol";`

:::note
To use Many Zeros in an environment such as tests where it's not
deployed you can import and call the `deployIntoEnvironmentUsingCheatcodes()` function.

:::

3. Buy an address on [manyzeros.xyz](https://manyzeros.xyz)
or mint your own by calling `MANY_ZEROS.mint(to, id, nonce)` with
your own `id` & `nonce` (not any `id` is valid as long as the 20
leading bytes are the caller's address).
4. Add the deployment code:

```solidity
// Fetches the initcode in a type safe way.
vm.interceptInitcode();
bytes memory initcode;
try new MyContract(param1, param2) { assert(false); }
catch (bytes memory interceptedInitcode) {
    initcode = interceptedInitcode;
}
// Performs the actual deployment via many zeros.
MyContract myContract = MyContract(MANY_ZEROS.deploy(id, initcode));
```
