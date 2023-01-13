import React from "react";
import useAuth from "../hooks/useAuth";
import Login from "./forms/Login";

const AuthGuard: React.FC<React.PropsWithChildren> = ({
  children,
}): JSX.Element => {
  const { state } = useAuth();

  if (!state?.isAuthenticated) return <Login />;
  return <>{children}</>;
};

export default AuthGuard;
