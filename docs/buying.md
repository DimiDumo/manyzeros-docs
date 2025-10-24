---
sidebar_position: 2
---

# Buying an Address

Using [manyzeros.xyz](https://manyzeros.xyz) you can easily buy a vanity
address. Once purchased it can immediately be used to deploy your
contract.


### Zero Addresses

_Zero Addresses_ are pre-mined vanity addresses with leading
zeros like `0x000000000000b361194cfe6312EE3210d53C15AA`. They can
make your contract cost less gas when used stored in calldata or when
used to store data more compactly in contract storage.

### Custom Addresses

The site also allows you to request a custom address with a certain number of specified digits/letters. When you make a request we mine it for you automatically before fulfilling the request automatically on-chain.

Once the request is placed you will not need to take any
additional action.

:::note
In the event that our service should
shutdown/disappear for any reason before your request is
fulfilled the contract has a trustless refund process you can
trigger.
:::

### Getting your Address on Other Chains

When you buy your address you **initially** only receive the
token on Ethereum mainnet. To receive the token on other chains
the website will give you a cross-chain authorization.

:::note
The cross-chain authorization is only granted after a
delay to protect against Ethereum reorgs.
:::

You can claim the token on another chain by submitting the
authorization via a call to the following function:

```solidity
function claimGivenUpWithSig(
    address to,
    uint256 id,
    uint8 nonce,
    address claimer,
    uint256 deadline,
    bytes memory signature
) external;
```

The `to` address receives the token, the `claimer` is who the
authorization was granted to. The `signature` is the signature of
the owner embeded in the `id`.

The authorization is entirely chain independent, given a valid
`signature` on one-chain it will be valid on all other chains as
well. This ensures you can trustlessly claim your address without
depending on bridges.
