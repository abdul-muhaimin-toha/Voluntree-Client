import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import RegistrationPage from "./pages/RegistrationPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="registration" element={<RegistrationPage />} />
    </Route>,
  ),
);
