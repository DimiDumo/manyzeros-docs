---
sidebar_position: 1
slug: '/'
---

# Intro

Many Zeros gives you a secure and trust minimized way to deploy
your EVM smart contracts to the same vanity address across
chains.

## Quickstart - Foundry

1. Install the SDK by running `forge install philogy/manyzeros-foundry` in your project
2. Import in your deploy script/test `import {MANY_ZEROS} from "manyzeros-foundry/IManyZeros.sol";`

:::note
To use Many Zeros in an environment such as tests where it's not
deployed you can import and call the `deployIntoEnvironmentUsingCheatcodes` function:

```solidity
import {Test} from "forge-std/Test.sol";
import {MANY_ZEROS, deployIntoEnvironmentUsingCheatcodes} from "manyzeros-foundry/IManyZeros.sol";

contract MyTest is Test {
    function setUp() public {
        deployIntoEnvironmentUsingCheatcodes();
    }
}
```
:::

3. Buy an address at [manyzeros.xyz](https://manyzeros.xyz)
or [generate your own](diy.md).
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
