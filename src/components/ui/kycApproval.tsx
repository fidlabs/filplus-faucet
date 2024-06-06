import { Button } from "./button";
import { useApi } from "@/hooks";
import { env } from "@/env";
import { PRIMARY_TYPE, createApprovalTypes, createDomain, createMessage } from "@/lib/utils";
import { KycProps } from "@/types/kyc";
import { signTypedData } from "@wagmi/core";
import { useWagmiConfig } from "@/app/wagmiConfig";
import { useLoading } from "@/lib/providers/loading.provider.client";
import { useRouter } from "next/navigation";

interface CustomError extends Error {
  message: string;
}

export default function KycApproval({
  account,
  connector,
  isConnected,
  chainId,
  clientId,
  repoName,
  repoOwner,
  repoIssue,
  version,
  onError
}: KycProps) {
  const showButton = isConnected && repoName && clientId && repoOwner && repoIssue;
  const config = useWagmiConfig();
  const { apiPost } = useApi();
  const approvalTypes = createApprovalTypes();
  const domain = createDomain(chainId, version);
  const message = createMessage(clientId, repoName, repoOwner);
  const { setLoading } = useLoading();
  const router = useRouter();

  const handleClick = async () => {
    if (!connector) {
      onError("Check your wallet connection");
      throw new Error("No connector");
    }

    try {
      setLoading(true);
      const signature = await signTypedData(config, {
        account,
        connector,
        domain,
        types: approvalTypes,
        primaryType: PRIMARY_TYPE,
        message
      });

      await apiPost(`${env.NEXT_PUBLIC_BACKEND_API_URL}/application/submit_kyc`, {
        message,
        signature
      });
      setLoading(false);
      router.push(`https://www.github.com/${repoOwner}/${repoName}/issues/${repoIssue}`);
    } catch (e) {
      if (e instanceof Error) {
        if (!e.message.includes("User rejected the request.")) {
          onError(e.message);
        }
      } else {
        onError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    showButton && (
      <Button className="mx-auto" onClick={handleClick}>
        Share and submit passport
      </Button>
    )
  );
}
