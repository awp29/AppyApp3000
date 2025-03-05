import React from "react";
import clsx from "clsx";
import Logo from "../../assets/logo.svg?react";
import Button from "../../components/button/Button";
import Input from "../../components/form/Input";
import PasswordInput from "../../components/form/PasswordInput";
import { useNavigate } from "react-router";
import { useAuth } from "../../Authenticator";
import { confirmSignIn } from "aws-amplify/auth";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const [isLoading, setIsLoading] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className={clsx("flex h-screen w-full")}>
      <div className={clsx("w-1/2 bg-zinc-950 p-10")}>
        <div className={clsx("flex items-center gap-3")}>
          <Logo className="text-white" width={24} height={24} />
          <p className={clsx("text-lg text-white")}>Appy App</p>
        </div>
      </div>
      <div className={clsx("flex w-1/2 items-center justify-center bg-white")}>
        <div className={clsx("flex flex-col items-center p-8")}>
          <h1 className={clsx("text-strong text-2xl font-bold")}>Login</h1>
          <p className={clsx("text-weak mt-2")}>
            Enter email and password to log into your account
          </p>

          <form
            className={clsx("w-full")}
            onSubmit={async (e) => {
              e.preventDefault();

              // auth.login("peirs.andrew@gmail.com", "Password2!");
              // navigate("/dashboard");

              // setIsLoading(true);
              navigate("/dashboard");
            }}
          >
            <div className={clsx("mt-6 flex w-full flex-col gap-2")}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <PasswordInput
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" isLoading={isLoading} className="mt-4 w-full">
              Login
            </Button>
          </form>

          {/* <Button
            onClick={async () => {
              const data = await confirmSignIn({
                challengeResponse: "Password2!",
              });

              console.log("Confirm sign in data", data);
            }}
            variant="secondary"
            className="mt-10 w-full"
          >
            Confirm Sign in
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
