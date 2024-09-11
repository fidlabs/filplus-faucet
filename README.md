# KYC-portal

## Quick start guide

Copy `.env.example` to `.env` and fill with values:

| Variable name                        | Description                                                          |
| ------------------------------------ | -------------------------------------------------------------------- |
| NEXT_PUBLIC_CHAIN_ID                 | Chain ID of chain that will be used for checking passport data.      |
| NEXT_PUBLIC_DAYS_TO_EXPIRE           | How long is the signature valid                                      |
| NEXT_PUBLIC_BACKEND_API_URL          | URL to allocator.tech API                                            |
| NEXT_PUBLIC_DECODER_CONTRACT_ADDRESS | Gitcoin Passport decoder contract address                            |
| NEXT_PUBLIC_RPC_URL                  | RPC URL for chain that will be used for checking passport data.      |
| NEXT_PUBLIC_EXPLORER_URL             | Explorer URL for chain that will be used for checking passport data. |
| NEXT_PUBLIC_CHAIN_NAME               | Name of chain that will be used for checking passport data.          |
| NEXT_PUBLIC_NATIVE_CURRENCY          | Currency chain that will be used for checking passport data.         |
| NEXT_PUBLIC_SYMBOL                   | Symbol of the native currency                                        |
| NEXT_PUBLIC_DECIMALS                 | Decimals of the native currency                                      |
| NEXT_PUBLIC_SCORE_THRESHOLD          | Minimal passport score required                                      |
| NEXT_PUBLIC_LAST_ALLOCATION_EXP_DAYS | How long is the allocation valid                                     |

```
npm ci
npm run start
```

Open [http://localhost:3000](http://localhost:3000)
