import { getCurrentUser, signIn, signOut } from "aws-amplify/auth";
import React, { createContext, ReactNode, useContext, useEffect } from "react";
import { useNavigate } from "react-router";

interface AuthenticatorContextType {
  signedIn?: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthenticatorContext = createContext<
  AuthenticatorContextType | undefined
>(undefined);

interface AuthenticatorProviderProps {
  children: ReactNode;
}

// AP-TODO: This whole thing is a mess. I need to redo it all properly.
// It's just first draft
export const AuthenticatorProvider: React.FC<AuthenticatorProviderProps> = ({
  children,
}) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [signedIn, setSignedIn] = React.useState(false);

  useEffect(() => {
    getCurrentUser().then((user) => {
      if (user) {
        setSignedIn(true);
        navigate("/dashboard");
      }
    });
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const data = await signIn({
        username: email,
        password,
      });

      console.log("Sign in data", data);

      if (data.isSignedIn) {
        await getCurrentUser();
        setSignedIn(true);
        navigate("/dashboard");
      }

      setLoggedIn(true);
    } catch (e) {
      console.error("Sign in error", e);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      signOut();
      setSignedIn(false);
      navigate("/");
    } catch (e) {
      console.error("Sign out error", e);
    }
  };

  return (
    <AuthenticatorContext.Provider value={{ signedIn, login, logout }}>
      {children}
    </AuthenticatorContext.Provider>
  );
};

export const useAuth = (): AuthenticatorContextType => {
  const context = useContext(AuthenticatorContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a NavbarProvider");
  }
  return context;
};
