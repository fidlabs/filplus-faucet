"use client";

import { FC } from "react";

const InsufficientAllowance: FC = () => {
  return (
    <p className="mb-2 font-bold text-lg text-center">
      The faucet is temporarily unavailable. Please try again later.
    </p>
  );
};

export default InsufficientAllowance;
