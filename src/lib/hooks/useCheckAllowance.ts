import { useEffect, useState, useCallback } from "react";
import { env } from "@/env";
import { apiGet } from "@/lib/httpClient";

const useCheckAllowance = () => {
  const [checkingAllowance, setCheckingAllowance] = useState(true);
  const [isAllowanceSufficient, setAllowanceSufficient] = useState(false);

  const checkAllowance = useCallback(async () => {
    setCheckingAllowance(true);
    try {
      const isAllowanceSufficient: boolean = await apiGet(
        `${env.NEXT_PUBLIC_BACKEND_API_URL}/autoallocator/check_if_allowance_is_sufficient`,
      );
      setAllowanceSufficient(isAllowanceSufficient);
    } catch (error) {
      console.error(
        `An error occurred while checking the allowance: ${error}. Please try again later.`,
      );
    } finally {
      setCheckingAllowance(false);
    }
  }, []);

  useEffect(() => {
    checkAllowance();
  }, [checkAllowance]);

  return { isAllowanceSufficient, checkingAllowance };
};

export default useCheckAllowance;
