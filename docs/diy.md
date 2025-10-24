---
sidebar_position: 4
---

# Creating Your Own Address

If you do not wish to purchase an address you can generate your
own. It may not have any unique vanity / leading zeros but you
will still retain the benefit of having the same address across
chains.

## Generating the ID + Nonce

An address token consits of:
- ID root owner address
- 12-byte ID extension
- `uint8` nonce

Any combination of extension + nonce will result in an
address so you can simply select them randomly. If you want
specific properties for your address you'll have to mine the
parameters, manually generating & brute force checking the
parameters. Alternatively you may purchase an address via the
site as explained [here](buying.md).

:::warning
Unless specifically mining for vanity addresses it is recommended to set the `nonce` to `1` as deployment gas cost scales linearly with the nonce.
:::


## Minting your Address

Once you've selected your address parameters you can construct
the address token ID by concatenating the owner address to the
extension ID, you can do this programmatically in Solidity with
the following code:

```solidity
// Replace with your ID.
bytes12 extensionId = 0x000000000000000000000000;
uint256 tokenId = uint256(bytes32(bytes.concat(
    bytes20(owner),
    extensionId
)));
```

:::note
Only the owner or accounts it has approved on that chain will have the
ability to mint the address token. This secures
your address from being used without permission by others.
:::

Now assuming you're using the foundry SDK you can simply call
`mint`:

```solidity
MANY_ZEROS.mint(tokenRecipient, id, nonce);
```

Alternatively call `mint` on the Many Zeros contract yourself, it's deployed to `0x000000000000b361194cfe6312EE3210d53C15AA` on all chains.

The signature of `mint` is:

```solidity
function mint(address to, uint256 id, uint8 nonce) external;
```

