import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "@fontsource/roboto";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
);
