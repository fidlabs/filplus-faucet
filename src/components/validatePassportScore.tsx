import useGetScore from "@/lib/hooks/getScore";
import { ValidatePassportScoreProps } from "@/types/kyc";
import { useEffect } from "react";

export default function ValidatePassportScore(props: ValidatePassportScoreProps) {
  const { score } = useGetScore(props);
  const parsedScore = parseInt(score) / 10_000;

  useEffect(() => {
    if (score) props.onScoreChange(parsedScore);
  }, [score]);

  return <div className="text-center">{`Current passport score: ${parsedScore}`}</div>;
}
