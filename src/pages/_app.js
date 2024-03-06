import {HydrationBoundary, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import NextNProgress from "nextjs-progressbar";
import {useState} from "react";
import reactQueryClient from "@/config/react-query";

import "@/styles/globals.css";



export default function App({ Component, pageProps: {session, ...pageProps} }) {
  const [queryClient] = useState(() => reactQueryClient);
  return (
      <QueryClientProvider client={queryClient}>
          <HydrationBoundary>
            <NextNProgress height={5} color={"#fff"}/>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster />
          </HydrationBoundary>
      </QueryClientProvider>
  );
}

