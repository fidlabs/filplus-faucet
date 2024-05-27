import useGetScore from "@/lib/hooks/getScore";
import { ValidatePassportScoreProps } from "@/types/kyc";
import { useEffect } from "react";

export default function ValidatePassportScore(props: ValidatePassportScoreProps) {
  const { score } = useGetScore(props);

  useEffect(() => {
    if (score) props.onScoreChange(parseInt(score));
  }, [score]);

  return <div className="text-center">{`Current passport score: ${score}`}</div>;
}
