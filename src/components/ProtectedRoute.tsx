import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../Authenticator";

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const { children } = props;
  const { signedIn } = useAuth();

  if (!signedIn) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
