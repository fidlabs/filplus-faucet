import useGetScore from "@/lib/hooks/getScore";
import { useLoading } from "@/lib/providers/loading.provider.client";
import { ValidatePassportScoreProps } from "@/types/kyc";
import { useEffect } from "react";
import { Spinner } from "./ui/spinner";

export default function ValidatePassportScore(props: ValidatePassportScoreProps) {
  const { score } = useGetScore(props);
  const { loading } = useLoading();
  const parsedScore = parseInt(score) / 10_000;

  useEffect(() => {
    if (score) props.onScoreChange(parsedScore);
  }, [score]);

  if (loading) {
    return <Spinner className="mx-auto" />;
  }
  return <div className="text-center">{`Current passport score: ${parsedScore}`}</div>;
}
