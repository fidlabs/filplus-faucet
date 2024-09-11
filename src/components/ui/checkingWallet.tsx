"use client";

import { FC } from "react";
import SimplerSpinner from "./simpleSpinner";

const CheckingWallet: FC = () => {
  return (
    <>
      <p className="text-base text-center"></p>
      <p className="mb-8">Checking your wallet. . .</p>
      <SimplerSpinner />
    </>
  );
};

export default CheckingWallet;
