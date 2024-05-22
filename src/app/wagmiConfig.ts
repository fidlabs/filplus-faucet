import { http, createConfig } from "wagmi";
import { mainnet, optimism } from "wagmi/chains";

export const WagmiConfig = createConfig({
  chains: [optimism],
  transports: {
    [optimism.id]: http()
  }
});
