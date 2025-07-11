import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./index.css";

//Lazy components
const App = lazy(() => import("./components/App"));

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Suspense fallback={<>Loading...</>}>
        <App />
      </Suspense>
    </React.StrictMode>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
