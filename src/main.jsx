import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StripeProvider from "./providers/StripeProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <StripeProvider>
          <RouterProvider router={router} />
        </StripeProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
