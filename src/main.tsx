import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import { NavbarProvider } from "./components/nav/NavBarContext.tsx";
import { AuthenticatorProvider } from "./Authenticator.tsx";

Amplify.configure(outputs);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthenticatorProvider>
          <NavbarProvider>
            <App />
          </NavbarProvider>
        </AuthenticatorProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
