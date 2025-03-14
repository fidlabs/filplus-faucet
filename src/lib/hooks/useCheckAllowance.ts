import { useEffect, useState, useRef } from "react";
import { useApi } from "@/lib/hooks/useApi";
import { env } from "@/env";

const useCheckAllowance = () => {
  const [checkingAllowance, setCheckingAllowance] = useState(true);
  const [isAllowanceSufficient, setAllowanceSufficient] = useState(false);

  const { apiGet } = useApi();
  const apiGetRef = useRef(apiGet);

  useEffect(() => {
    const checkAllowance = async () => {
      setCheckingAllowance(true);
      try {
        const isAllowanceSufficient: boolean = await apiGetRef.current(
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
    };

    checkAllowance();
  }, []);

  return { isAllowanceSufficient, checkingAllowance };
};

export default useCheckAllowance;
