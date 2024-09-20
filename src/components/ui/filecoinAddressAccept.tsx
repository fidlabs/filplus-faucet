"use client";

import { FC, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

const FileCoinAddressAccept: FC<{
  handleClick: (filecoinAddress: string) => void;
}> = ({ handleClick }) => {
  const [value, setValue] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);

  const onClick = () => {
    handleClick(value);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setValue(value);
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center w-full md:w-4/5">
      <p className="block text-gray-700 font-bold mb-2 text-lg text-center">
        {`Please enter your Filcoin Address:`}
      </p>
      <Input className="mb-2" type="text" value={value} onChange={onChange} />
      <Button className="mx-auto" onClick={onClick} disabled={disabled}>
        Confirm address
      </Button>
    </div>
  );
};

export default FileCoinAddressAccept;
