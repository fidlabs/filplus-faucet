import { http, createConfig } from "wagmi";
import { mainnet, optimism, optimismSepolia } from "wagmi/chains";

export const WagmiConfig = createConfig({
  chains: [optimism, optimismSepolia],
  transports: {
    [optimism.id]: http(),
    [optimismSepolia.id]: http()
  }
});
