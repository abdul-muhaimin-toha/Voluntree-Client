import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import RegistrationPage from "./pages/RegistrationPage";
import AddVolunteerPostPage from "./pages/AddVolunteerPostPage";
import VolunteerPostDetailsPage from "./pages/VolunteerPostDetailsPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="registration" element={<RegistrationPage />} />
      <Route path="volunteer-opportunities" element={<RegistrationPage />} />
      <Route path="add-volunteer-post" element={<AddVolunteerPostPage />} />
      <Route path="post-details/:id" element={<VolunteerPostDetailsPage />} />
    </Route>,
  ),
);
