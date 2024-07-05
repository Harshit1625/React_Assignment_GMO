import { FC, useEffect, useState } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import NotAuthenticated from "./components/NotAuthenticated";

const App: FC = () => {
  const [authenicated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const storedDetails = localStorage.getItem("user");
    console.log(storedDetails);
    if (storedDetails) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/not-authenticated" element={<NotAuthenticated />}></Route>
        <Route
          path="/landing-page"
          element={
            authenicated ? (
              <LandingPage />
            ) : (
              <Navigate replace to={"/not-authenticated"}></Navigate>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
