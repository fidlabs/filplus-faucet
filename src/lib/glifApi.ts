import { env } from "@/env";

export const checkIfActorExists = async (address: string): Promise<boolean> => {
  const requestBody = {
    jsonrpc: "2.0",
    method: "Filecoin.StateGetActor",
    params: [address, null],
    id: 1,
  };
  let response;
  try {
    response = await fetch(`${env.NEXT_PUBLIC_GLIF_URL}`, {
      method: "POST",
      body: JSON.stringify(requestBody),
    });
  } catch (error: unknown | TypeError) {
    const errMessage = `Error accessing GLIF API Filecoin.StateGetActor: ${
      (error as Error).message
    }`;
    throw new Error(errMessage);
  }
  let data;
  try {
    data = await response.json();
  } catch (error: unknown) {
    const errMessage = `Parse data from Filecoin.StateGetActor failed: ${error}`;
    throw new Error(errMessage);
  }
  if (data.error) {
    if (data.error.code === 1) {
      return false;
    } else {
      throw new Error(data.error.message);
    }
  }
  return true;
};
