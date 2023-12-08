import "./App.css";
import VerifyEmail from "./pages/VerifyEmail";
import { lazy, Suspense, useEffect, useState } from "react";
import ForgotPassword from "./pages/ForgotPassword";
import Delivery from "./pages/Delivery";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import useAuth from "./hooks/useAuth";
import Contact from "./pages/Contact.jsx";
import Checkout from "./pages/Checkout.jsx";
import Categorie from "./pages/Categorie.jsx";
// import { PrivateRoute } from "./routes/privateRoute";
import { PrivateRoute } from "./routes/PrivateRoute.jsx";
const Home = lazy(() => import("./pages/Home"));
const Inscreption = lazy(() => import("./pages/Inscreption"));
import Redirect from "./components/Redirect";
import Container from "./components/Maps/mapFilter/MapContainer";
import MapManager from "./components/Maps/mapManager.jsx";

import ProductDetails from "./pages/ProductDetails";
import PageRes from "./components/Maps/page/index.jsx";
// import Restaurant from "./pages/Restaurant.jsx";

import Dashboard from "./pages/Dashboard";
import ShoppingCart from "./pages/ShoppingCart";
import { io } from "socket.io-client";
// import Footer from "./pages/Footer.jsx";
import CorporateContainer from "./components/CorporateContainer.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
// import Modeltest from "./components/Maps/page/Restaurantposition.jsx";
import Restaurantposition from "./components/Maps/page/Restaurantposition.jsx";
import CategoryDashboard from "./pages/categories/index.jsx";
import DashboardOverView from "./pages/DashboardOverView/index.jsx";
import Restaurant from "./pages/Restaurant.jsx";
import Brands from "./pages/Brands.jsx";
import Items from "./pages/Items.jsx";
import Users from "./pages/Users.jsx";
import OrderDetails from "./pages/OrderDetails.jsx";
import PersonDelivery from "./pages/PersonDelivery.jsx";
import Menu from "./pages/Menu.jsx";
import Orders from "./pages/Orders.jsx";
import CuisinDashboard from "./pages/cuisines/index.jsx";

import AddRestaurant from "./pages/restaurantCrud/AddRestaurant.jsx";
import { setlogin } from "./redux/features/auth/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import TrackingUser from "./components/Maps/tracking/user.jsx";
import TrackingLivreur from "./components/Maps/tracking/livreur.jsx";

import DeliveryOrders from "./pages/DeliveryOrders.jsx";
import DeliveryProfile from "./pages/DeliveryProfile.jsx";
import EditRestaurant from "./pages/restaurantCrud/editRestaurant.jsx";
import Overview from "./components/Home/Overview.jsx";

function App() {
  const [socket, setSocket] = useState(null);
  const { isLoading, isAuthenticated } = useAuth();
  const dispatch = useDispatch();
  const user = localStorage.getItem("USER");


  const objUser = JSON.parse(user);

  if (
    objUser !== null ||
    objUser !== undefined ||
    objUser !== "undefined" ||
    objUser !== "" ||
    objUser !== "null"
  ) {
    dispatch(setlogin(objUser));
  }

  useEffect(() => {
    setSocket(io("http://localhost:3000"));
  }, []);
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
              element={false ? <Redirect /> : <Inscreption socket={socket} />}
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
            <Route path="/delivery" element={<Delivery />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/Categorie" element={<Categorie />} />

            <Route path="/maps" element={<Container />} />
            <Route path="/manager/maps" element={<MapManager />} />

            <Route path="/ProductDetails" element={<ProductDetails />} />

            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/footer" element={<CorporateContainer />} />
            <Route path="/how-works" element={<HowItWorks />} />

            {/* <Route
              path="/restaurant/search/:name?"
              element={<PageRes />}
            ></Route> */}
            <Route
              path="/restaurant/search/:slug?"
              element={<PageRes />}
            ></Route>

            {/* <Route path="/dashboard" element={<Dashboard />} /> */}

            <Route path="/restaurant/:slug?" element={<PageRes />}></Route>
            <Route
              path="/restaurant/position"
              element={<Restaurantposition />}
            ></Route>
            <Route path="/dashboard" element={<Dashboard socket={socket} />}>
              <Route path={"/dashboard"} element={<DashboardOverView />} />
              <Route
                path={"/dashboard/category"}
                element={<CategoryDashboard />}
              />
              <Route path={"/dashboard/restaurant"} element={<Restaurant />} />
              <Route path={"/dashboard/brands"} element={<Brands />} />
              <Route path={"/dashboard/items"} element={<Items />} />
              <Route path={"/dashboard/users"} element={<Users />} />
              <Route path={"/dashboard/orders"} element={<Orders />} />
              <Route
                path={"/dashboard/deliveryPersone"}
                element={<PersonDelivery />}
              />
              <Route
                path={"/dashboard/deliveryOrders"}
                element={<DeliveryOrders />}
              />
              <Route
                path={"/dashboard/deliveryProfile"}
                element={<DeliveryProfile />}
              />
              <Route path={"/dashboard/menus"} element={<Menu />} />
              <Route
                path={"/dashboard/cuisine"}
                element={<CuisinDashboard />}
              />
              <Route
                path="/dashboard/addRestaurant"
                element={<AddRestaurant />}
              />
              <Route
                path="/dashboard/editRestaurant/:id"
                element={<EditRestaurant />}
              />
              <Route
                path="/dashboard/trackinguser"
                element={<TrackingUser />}
              />

              <Route
                path="/dashboard/trackinglivreur"
                element={<TrackingLivreur />}
              />
            </Route>
          </Routes>
        </Suspense>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
