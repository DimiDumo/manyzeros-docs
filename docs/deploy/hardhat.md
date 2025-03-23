---
sidebar_position: 2
---

# Hardhat

How to deploy your code using **Hardhat**.

## Setup Hardhat Project

If you don't have a hardhat project setup yet, check out the
[hardhat docs](https://hardhat.org/hardhat-runner/docs/guides/project-setup) or
you can use these commands for a quick setup (also works with npm and yarn).

Initialize the project.

```bash
pnpm init
```

Add hardhat dependecy.

```bash
pnpm add -D hardhat
```

Initialize the project with hardhat (choose your preferred langauge options):

```bash
npx hardhat init
```

You can now write your contracts in the `contracts/` folder and compile them with:

```bash
npx hardhat compile
```

To test you contracts please follow the [hardhat docs](https://hardhat.org/hardhat-runner/docs/guides/test-contracts).

## Setup Deployment Script
