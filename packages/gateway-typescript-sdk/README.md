# DO NOT USE

# Safe Gateway TypeScript SDK

[![npm](https://img.shields.io/npm/v/@rndlabs/safe-gateway-typescript-sdk?label=%40safe-global%2Fsafe-gateway-typescript-sdk)](https://www.npmjs.com/package/@rndlabs/safe-gateway-typescript-sdk)

A TypeScript SDK for the [Safe Client Gateway](https://github.com/safe-global/safe-client-gateway)

📖 [API reference](https://safe-global.github.io/safe-gateway-typescript-sdk/modules.html)

## Usage policy

NB: Safe Client Gateway isn't meant for public use.
Please _do not_ use this SDK if you're building, e.g., a Safe App.

## Using the SDK

Install:

```shell
yarn add @rndlabs/safe-gateway-typescript-sdk
```

Import:

```ts
import { getChainsConfig, type ChainListResponse } from '@rndlabs/safe-gateway-typescript-sdk'
```

Use:

```ts
const chains = await getChainsConfig()
```

The SDK needs no initialization unless you want to override the base URL. You can set an alternative base URL like so:

```ts
import { setBaseUrl } from '@rndlabs/safe-gateway-typescript-sdk'

// Switch the SDK to dev mode
setBaseUrl('https://safe-client.staging.5afe.dev')
```

The full SDK reference can be found [here](https://safe-global.github.io/safe-gateway-typescript-sdk/modules.html).

## Adding an endpoint

Endpoint types are defined in `src/types/gateway.ts`.

Each endpoint consists of:

- a function defined in `src/index.ts` (e.g. `getBalances`)
- a path definition (e.g. `'/chains/{chainId}/safes/{address}/balances/{currency}/'`)
- operation definition (e.g. `safes_balances_list`)
- response definition

To add a new endpoint, follow the pattern set by the existing endpoints.

## Eslint & prettier

This command will run before every commit:

```shell
yarn eslint:fix
```

## Tests

To run the unit and e2e tests locally:

```shell
yarn test
```

N.B.: the e2e tests make actual API calls on staging.

## Gateway API docs

The TypeScript types in this SDK are based on [Rust types](https://safe-global.github.io/safe-client-gateway/docs/routes/index.html) from the Gateway API.
