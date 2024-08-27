import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GlobalStyles from "./styles/GlobalStyles.js";
import Dashboard from "./pages/Dashboard.jsx";
import Account from "./pages/Account.jsx";
import Bookings from "./pages/Bookings.jsx";
import Cabins from "./pages/Cabins.jsx";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Settings from "./pages/Settings.jsx";
import Users from "./pages/Users.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path={"account"} element={<Account />} />
            <Route path={"bookings"} element={<Bookings />} />
            <Route path={"cabins"} element={<Cabins />} />
            <Route path={"dashboard"} element={<Dashboard />} />
            <Route index element={<Navigate replace to={"dashboard"} />} />
            <Route path={"settings"} element={<Settings />} />
            <Route path={"users"} element={<Users />} />
          </Route>
          <Route path={"login"} element={<Login />} />
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
