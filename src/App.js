import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import WebsitePage from "./Pages/WebsitePage";
import LoginPage from "./components/LoginPage/LoginPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { Provider } from "mobx-react";
import { CookiesProvider } from "react-cookie";
import store from "./Store";
import ProtectedRoute from "./helpers/ProtectedRoute";
import DashboardPage from "./Pages/DashboardPage";
import UserPage from "./Pages/UserPage";
import ProductsPage from "./Pages/ProductsPage";
import AdminLayout from "./layout/AdminLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/admin-panel",
      element: <AdminLayout/>,
      children:[
        {
          path: "/admin-panel/dashboard",
          element:<DashboardPage />
        },
        {
          path: "/admin-panel/users",
          element:<DashboardPage />
        },
        {
          path: "/admin-panel/product",
          element:<DashboardPage />
        }
      ]
    },{
      path: "/",
      element: <WebsitePage/>,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },{
      path:"*" ,
      element:<PageNotFound />
    }
    
  ])
  return (
    <CookiesProvider>
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<WebsitePage />}></Route>
            <Route path="/admin-panel" element={<LoginPage />}></Route> 
            <Route path="/admin-panel/dashboard" element={<LoginPage />}></Route>            
            
            {/* admin routes */}
            {/* <Route
              path="/admin-panel/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            /> */}

            {/* Catch all unmatched routes */}
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Provider>
      </Router>
    </CookiesProvider>
  );
}

export default App;
