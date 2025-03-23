---
sidebar_position: 5
---

# Deploy

This section describes how you can deploy a contract using **CREATE3** to a vanity address provided by _Many Zeros_.

In order to deploy your contract to a _Many Zeros_ address you first have copy the **Deploy ID** of the address you bought.
On the top left, click on your profile, then click on [My Addresses](https://manyzeros.xyz/wallet). Find the address you want to deploy your code to
and click on it. Here, copy the **Deploy ID**.

You can now deploy your contract using `deploy(uint256 id, bytes calldata initcode)` on the _Many Zeros_ contract
(`0x000000000000b361194cfe6312ee3210d53c15aa`), where **id** refers to the **Deploy ID**.

For more detailed intructsions you can follow our guides:

- [Foundry](/deploy/foundry)
- [Hardhat](/deploy/hardhat)
