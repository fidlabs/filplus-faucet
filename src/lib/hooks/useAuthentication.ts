import { useMemo, useState } from "react";
import { IUser } from "@/lib/interfaces/user.interface";

export const useAuthentication = () => {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  const login = async (email: string, password: string) => {};

  const logout = async () => {
    // Call the logout API
  };

  const register = async (email: string, password: string) => {
    // Call the register API
  };

  const resetPassword = async (email: string) => {
    // Call the reset password API
  };

  const getUser = async () => {
    // Call the get user API
  };

  const isAuthenticated = useMemo(() => {
    return !!user;
  }, [user]);

  return {
    login,
    logout,
    register,
    resetPassword,
    getUser,
    user,
    isAuthenticated,
  };
};
