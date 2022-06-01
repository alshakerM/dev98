import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from '../Components/HomePage/HomePage';

const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}
