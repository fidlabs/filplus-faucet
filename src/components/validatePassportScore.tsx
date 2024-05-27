import useGetScore from "@/lib/hooks/getScore";
import { ValidatePassportScoreProps } from "@/types/kyc";
import { useEffect } from "react";

export default function ValidatePassportScore(props: ValidatePassportScoreProps) {
  const { score, error } = useGetScore(props);

  useEffect(() => {
    if (error?.name) {
      props.onError("Failed to get user score" + error.metaMessages?.[0]);
    }
    if (score) props.onScoreChange(parseInt(score));
  }, [error, score]);

  return <div className="text-center">{`Current passport score: ${score}`}</div>;
}
