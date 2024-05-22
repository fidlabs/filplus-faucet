import { http, createConfig } from "wagmi";
import { mainnet, optimism } from "wagmi/chains";

export const WagmiConfig = createConfig({
  chains: [mainnet, optimism],
  transports: {
    [mainnet.id]: http(),
    [optimism.id]: http()
  }
});
