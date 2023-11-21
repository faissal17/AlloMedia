import "./App.css";
import VerifyEmail from "./pages/VerifyEmail";
import { lazy, Suspense } from "react";
import ForgotPassword from "./pages/ForgotPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import useAuth from "./hooks/useAuth";
import ContactUs from "./pages/ConatctUs.jsx";
import { PrivateRoute } from "./routes/privateRoute";
const Home = lazy(() => import("./pages/Home"));
const Inscreption = lazy(() => import("./pages/Inscreption"));
import Redirect from "./components/Redirect";
import Container from "./components/Maps/mapFilter/MapContainer";
import MapManager from "./components/Maps/mapManager.jsx";

import ProductDetails from "./pages/ProductDetails";
import PageRes from "./components/Maps/page/index.jsx";

function App() {
  const { isLoading, isAuthenticated } = useAuth();
  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-red-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense
          fallback={
            <div className="w-screen h-screen flex justify-center items-center">
              <div className="w-10 h-10 border-4 border-red-500 rounded-full animate-spin"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/inscription"
              element={false ? <Redirect /> : <Inscreption />}
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute
                  authenticated={isAuthenticated}
                  element={<Profile />}
                />
              }
            />
            <Route path="/verifyEmail/:token?" element={<VerifyEmail />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/contactUs" element={<ContactUs />} />

            <Route path="/maps" element={<Container />} />
            <Route path="/manager/maps" element={<MapManager />} />

            <Route path="/ProductDetails" element={<ProductDetails />} />

            <Route
              path="/restaurant/search/:name?"
              element={<PageRes />}
            ></Route>
          </Routes>
        </Suspense>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
