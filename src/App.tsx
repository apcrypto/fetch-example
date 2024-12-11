import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/Header";
import UniversitiesList from "./components/UniversitiesList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <UniversitiesList />
    </QueryClientProvider>
  );
}

export default App;
