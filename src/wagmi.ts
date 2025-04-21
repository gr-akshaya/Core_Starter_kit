import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia, coreDao, coreTestnet1, coreTestnet2 } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [
    coreDao,
    coreTestnet1,
    coreTestnet2,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});
