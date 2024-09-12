// react router

import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// layout
import RootLayout from "./layout/RootLayout";
// pages
import ExploreProduct from "./pages/ExploreProducts";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

import { AuthProvider } from "./component/Navbar/AuthContext";
import LoginPage from "./component/checkout/LoginPage";

// react toast
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<ExploreProduct />} />
      <Route path="/explore/:category" element={<ExploreProduct />}></Route>
      <Route path="/product/:productId" element={<Product />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/product/:productId" element={<Product />}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>

    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
    <>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          style: {
            padding: "16px",
            fontSize: "1.6rem",
          },
        }}
      />
    </>
    </AuthProvider>
  );
}

export default App;
