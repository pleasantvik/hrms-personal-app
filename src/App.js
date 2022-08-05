import React from 'react';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BaseRoutes from 'routes';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: 5000,
    },
    mutations: {
      retry: false,
    },
  },
});


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/*' element={<BaseRoutes />} />
        </Routes>
      </Router>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>

  );
}

export default App;
