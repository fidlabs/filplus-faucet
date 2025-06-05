# Filecoin Plus DataCap Faucet

**Filecoin Plus DataCap Faucet** is a self-serve tool that automates the allocation of **1 TiB of free DataCap** to users who have a verified decentralized identity via [Gitcoin Passport](https://passport.gitcoin.co/).

### Purpose

The goal of this project is to simplify and automate the manual process of DataCap allocation in the Filecoin Plus program. It is designed for developers and ecosystem participants who need **instant access to DataCap** for prototyping, testing, or onboarding new datasets — without waiting for manual approval.

---

## 🛠️ How to Run the Project Locally

This project is a [Next.js](https://nextjs.org/) application that requires **Node.js v22.1.0** or higher and uses environment variables to configure chain settings, contract addresses, and API integrations.

### ✅ Prerequisites

- Node.js `v22.1.0`
- npm
- Gitcoin Passport account
- Wallet with access to the Optimism network

### 📦 Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**

   Create a `.env` file in the root directory and define the following values:

   ```env
   NEXT_PUBLIC_CHAIN_ID=
   NEXT_PUBLIC_DAYS_TO_EXPIRE=
   NEXT_PUBLIC_BACKEND_API_URL=
   NEXT_PUBLIC_DECODER_CONTRACT_ADDRESS=
   NEXT_PUBLIC_RPC_URL=
   NEXT_PUBLIC_EXPLORER_URL=
   NEXT_PUBLIC_CHAIN_NAME=
   NEXT_PUBLIC_NATIVE_CURRENCY=
   NEXT_PUBLIC_SYMBOL=
   NEXT_PUBLIC_DECIMALS=
   NEXT_PUBLIC_SCORE_THRESHOLD=
   NEXT_PUBLIC_WALLET_CONNECT_ID=
   NEXT_PUBLIC_LAST_ALLOCATION_EXP_DAYS=
   NEXT_PUBLIC_GLIF_URL=
   NEXT_PUBLIC_GA_ID=
   NEXT_PUBLIC_GSV_ID=
   ```

   > You can use the default values from the `env.ts` file as a reference for most environment variables.

3. **Run the app:**

   ```bash
   npm run dev
   ```

   The app will be available at: [http://localhost:3000](http://localhost:3000)

---

## Related Repositories

- [Backend API](https://github.com/filecoin-project/filplus-backend)
- [Smart Contracts](https://github.com/fidlabs/contract-metaallocator)