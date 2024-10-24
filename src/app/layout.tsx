"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import 'react-responsive-modal/styles.css';
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import UserProvider from "@/core/providers/user-provider";
import { QueryClient, QueryClientProvider } from "react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      cacheTime: 1000 * 60 * 10 // 10 minutes
    }
  }
});
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  return (
    <html lang="en">
        <QueryClientProvider client={queryClient}>
       <UserProvider>
      <body suppressHydrationWarning={true}>
        {loading ? <Loader /> : children}
      </body>
      </UserProvider>
      </QueryClientProvider>
    </html>
  );
}
