---
sidebar_position: 3
---

# Deploying to an Address

Once you've minted/bought an address token you can burn it to
deploy your contract.

Assuming you're using the foundry SDK simply call `deploy` with
your contract's _initcode_:

```solidity
import {MANY_ZEROS} from "manyzeros-foundry/IManyZeros.sol";

bytes memory initcode = hex"0123";
address newContract = MANY_ZEROS.deploy(tokenId, initcode);
```

:::note
The `nonce` parameter is not required for deployment,
it's stored in the contract when you mint/purchase the address.
:::

## Initcode

The initialization code of your contract (initcode for short) is
the full code payload passed to the EVM to create your contract.
The initcode of your contract is derived by concatenating the
deploy code and the ABI encoded constructor arguments together.
This is what Solidity automatically does under the hood for you
when you declare `new MyContract(param1, param2, ...)`.

To build the initcode in a deploy script or test in foundry it is
recommended to take advantage of the `vm.interceptInitcode`
cheatcode:

```solidity
vm.interceptInitcode();
bytes memory initcode;
try new MyContract(param1, param2) { assert(false); }
catch (bytes memory interceptedInitcode) {
    initcode = interceptedInitcode;
}
```

:::tip
The go to way to do this in the past used to be
`bytes.concat(type(MyContract).creationCode, abi.encode(param1,
param2, ...))`, the downside of this approach is that if you
change the number or types of the constructor arguments your
deployment code will still compile but will incorrectly
reinterpret the manually encoded inputs as different types,
silently discard extra parameters or in the best case fail when
it's run.

The `interceptInitcode` cheatcode allows you to leverage
Solidity's `new` syntax, which checks at compile time that the
types & numbers of construct arguments line up.
:::
