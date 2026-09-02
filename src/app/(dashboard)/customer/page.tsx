"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CustomerDashboard from "@/features/customer/components/customer-dashboard";
import { useState } from 'react';

export default function CustomerPage() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <CustomerDashboard />
    </QueryClientProvider>
  );
}
