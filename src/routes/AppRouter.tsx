import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Main Layout
const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));

// Pages
import Error from "@pages/Error/Error";
import Home from "@pages/Home/Home";

// some components helpers for pages
import UseRestScroll from "@hooks/useRestScroll";
import PageSuspense from "@components/feedback/PageSuspense/PageSuspense";
import ProtectedRoute from "@components/eCommerce/Auth/ProtectedRoute";

// Lazy Loading Pages
const AboutUs = lazy(() => import("@pages/AboutUs/AboutUs"));
const Cart = lazy(() => import("@pages/Cart/Cart"));
const Categories = lazy(() => import("@pages/Categories/Categories"));
const Login = lazy(() => import("@pages/Login/Login"));
const Products = lazy(() => import("@pages/Products/Products"));
const Register = lazy(() => import("@pages/Register/Register"));
const Wishlist = lazy(() => import("@pages/Wishlist/Wishlist"));
const AllProducts = lazy(() => import("@pages/AllProducts/AllProducts"));
const ProductDetails = lazy(
  () => import("@pages/ProductDetails/ProductDetails")
);
const ProfileLayout = lazy(
  () => import("@layouts/ProfileLayout/ProfileLayout")
);
const Profile = lazy(() => import("@pages/Profile/Profile"));
const Orders = lazy(() => import("@pages/Orders/Orders"));
const ProfileSettings = lazy(
  () => import("@pages/ProfileSettings/ProfileSettings")
);
const DeleteAccount = lazy(() => import("@pages/DeleteAccount/DeleteAccount"));

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <UseRestScroll />
        <PageSuspense>
          <MainLayout />
        </PageSuspense>
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: (
          <PageSuspense>
            <Categories />
          </PageSuspense>
        ),
      },
      {
        path: "categories/products/:cat_prefix",
        element: (
          <PageSuspense>
            <Products />
          </PageSuspense>
        ),
        loader: ({ params }) => {
          if (
            typeof params.cat_prefix !== "string" ||
            !/^[a-z-]+$/i.test(params.cat_prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "all-products",
        element: (
          <PageSuspense>
            <AllProducts />
          </PageSuspense>
        ),
      },
      {
        path: "all-products/:productId",
        element: (
          <PageSuspense>
            <ProductDetails />
          </PageSuspense>
        ),
      },
      {
        path: "cart",
        element: (
          <PageSuspense>
            <Cart />
          </PageSuspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PageSuspense>
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          </PageSuspense>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about-us",
        element: (
          <PageSuspense>
            <AboutUs />
          </PageSuspense>
        ),
      },
      {
        path: "profile",
        element: (
          <PageSuspense>
            <ProtectedRoute>
              <ProfileLayout />
            </ProtectedRoute>
          </PageSuspense>
        ),
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "settings",
            element: <ProfileSettings />,
          },
          {
            path: "delete-account",
            element: <DeleteAccount />,
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
