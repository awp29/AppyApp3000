import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import { Authenticator } from "@aws-amplify/ui-react";
import { NavbarProvider } from "./components/nav/NavBarContext.tsx";

Amplify.configure(outputs);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Authenticator> */}
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NavbarProvider>
          <App />
        </NavbarProvider>
      </BrowserRouter>
    </QueryClientProvider>
    {/* </Authenticator> */}
  </React.StrictMode>,
);
