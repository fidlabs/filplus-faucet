import { env } from "@/env";
import { useMemo } from "react";
import { http, createConfig } from "wagmi";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  walletConnectWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";

const useNetworkConfig = () => {
  const {
    NEXT_PUBLIC_CHAIN_ID,
    NEXT_PUBLIC_RPC_URL,
    NEXT_PUBLIC_EXPLORER_URL,
    NEXT_PUBLIC_CHAIN_NAME,
    NEXT_PUBLIC_NATIVE_CURRENCY,
    NEXT_PUBLIC_SYMBOL,
  } = env;

  return useMemo(
    () => ({
      [NEXT_PUBLIC_CHAIN_NAME]: {
        id: NEXT_PUBLIC_CHAIN_ID,
        name: NEXT_PUBLIC_CHAIN_NAME,
        nativeCurrency: {
          name: NEXT_PUBLIC_NATIVE_CURRENCY,
          symbol: NEXT_PUBLIC_SYMBOL,
          decimals: 18,
        },
        rpc: NEXT_PUBLIC_RPC_URL,
        rpcUrls: { default: { http: [NEXT_PUBLIC_RPC_URL] } },
        chainId: NEXT_PUBLIC_CHAIN_ID,
        explorerUrl: NEXT_PUBLIC_EXPLORER_URL,
      },
    }),
    [
      NEXT_PUBLIC_CHAIN_ID,
      NEXT_PUBLIC_RPC_URL,
      NEXT_PUBLIC_EXPLORER_URL,
      NEXT_PUBLIC_CHAIN_NAME,
      NEXT_PUBLIC_NATIVE_CURRENCY,
      NEXT_PUBLIC_SYMBOL,
    ],
  );
};

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet, walletConnectWallet, ledgerWallet],
    },
  ],
  {
    appName: "KYC portal",
    projectId: env.NEXT_PUBLIC_WALLET_CONNECT_ID,
  },
);

export const useWagmiConfig = () => {
  const networkConfig = useNetworkConfig();
  const chainConfig = networkConfig[env.NEXT_PUBLIC_CHAIN_NAME];

  return useMemo(
    () =>
      createConfig({
        chains: [chainConfig],
        transports: { [chainConfig.chainId]: http(chainConfig.rpc) },
        connectors,
        ssr: true,
      }),
    [chainConfig],
  );
};
