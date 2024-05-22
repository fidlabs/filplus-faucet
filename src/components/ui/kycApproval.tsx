import { useSignTypedData } from "wagmi";
import { Button } from "./button";
import { Epi712Props } from "@/types/eip712Types";
import { useApi } from "@/hooks";
import { useEffect } from "react";
import { env } from "@/env";
import { PRIMARY_TYPE, createApprovalTypes, createDomain, createMessage } from "@/lib/utils";

export default function KycApproval({ isConnected, chainId, clientId, repoName, repoOwner, version }: Epi712Props) {
  const showButton = isConnected && repoName && clientId && repoOwner;
  const { signTypedData, data } = useSignTypedData();
  const { apiPost } = useApi();

  const message = createMessage(clientId, repoName, repoOwner);
  const domain = createDomain(chainId, version);
  const approvalTypes = createApprovalTypes();

  useEffect(() => {
    if (data) {
      try {
        apiPost(`${env.NEXT_PUBLIC_BACKEND_API_URL}/application/submit_kyc`, {
          message,
          signature: data
        });
      } catch (e) {
        //todo: toast or error handling
        console.error(e);
      }
    }
  }, [data]);

  return (
    showButton && (
      <Button
        className="mx-auto"
        onClick={() =>
          signTypedData({
            domain,
            types: approvalTypes,
            primaryType: PRIMARY_TYPE,
            message
          })
        }
      >
        Sign message
      </Button>
    )
  );
}
