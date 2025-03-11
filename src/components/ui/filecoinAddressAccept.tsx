"use client";

import { FC, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

const FileCoinAddressAccept: FC<{
  handleClick: (filecoinAddress: string) => void;
}> = ({ handleClick }) => {
  const [value, setValue] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const validateAddress = (address: string): boolean => {
    const filecoinAddressPattern = /^(f0|f1|f2|f3|f4)[a-zA-Z0-9]*$/;
    return filecoinAddressPattern.test(address);
  };

  const onClick = () => {
    if (validateAddress(value)) {
      setError("");
      handleClick(value);
    } else {
      setError(
        "Invalid address format: Please enter a valid Filecoin address (f0, f1, f2, f3, or f4). Ethereum addresses are not supported.",
      );
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);

    if (value.length) {
      if (validateAddress(value)) {
        setError("");
        setDisabled(false);
      } else {
        setError(
          "Invalid address format: Please enter a valid Filecoin address (f0, f1, f2, f3, or f4). Ethereum addresses are not supported.",
        );
        setDisabled(true);
      }
    } else {
      setDisabled(true);
      setError("");
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center w-full md:w-4/5">
      <p className="block text-gray-700 font-bold mb-2 text-lg text-center">
        {`Please enter your Filecoin Address:`}
      </p>
      <Input className="mb-2" type="text" value={value} onChange={onChange} />
      {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
      <Button className="mx-auto" onClick={onClick} disabled={disabled}>
        Confirm address
      </Button>
    </div>
  );
};

export default FileCoinAddressAccept;
