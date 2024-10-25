import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WebsitePage from "./Pages/WebsitePage";
import LoginPage from "./components/LoginPage/LoginPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { Provider } from "mobx-react";
import { CookiesProvider } from "react-cookie";
import store from "./Store";
import ProtectedRoute from "./helpers/ProtectedRoute";
import DashboardPage from "./Pages/DashboardPage";

function App() {
  return (
    <CookiesProvider>
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<WebsitePage />}></Route>
            <Route path="/admin-panel" element={<LoginPage />}></Route>

            {/* admin routes */}
            <Route
              path="/admin-panel/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />

            {/* Catch all unmatched routes */}
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Provider>
      </Router>
    </CookiesProvider>
  );
}

export default App;
