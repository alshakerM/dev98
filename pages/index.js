import Head from 'next/head';
import Image from 'next/image';
import HomePage from '../Components/HomePage/HomePage';
import styles from '../styles/Home.module.css';

import { QueryClient, QueryClientProvider } from 'react-query';
const client = new QueryClient({
  defaultOptions: {
    queries: {
      // Half an hour
      staleTime: 1800000,
      refetchOnWindowFocus: false,
    },
  },
});

export default function Home() {
  return (
    <QueryClientProvider client={client}>
      <HomePage />
    </QueryClientProvider>
  );
}
