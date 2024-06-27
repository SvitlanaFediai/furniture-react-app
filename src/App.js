import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import SignIn from "./pages/Account/signIn/SignIn";
import SignUp from "./pages/Account/signUp/SignUp";
import Delivery from "./pages/Delivery/Delivery";
import Payment from "./pages/Payment/Payment";
import Return from "./pages/Returns/Returns";
import PaymentMethods from "./pages/PaymentMethod/PaymentMethod";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/delivery" element={<Delivery />}></Route>
          <Route path="/return" element={<Return />}></Route>
          <Route path="/paymentMethod" element={<PaymentMethods />}></Route>
        </Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Route>
    </>
  ),
  { basename: "/furniture-app-react" }
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
