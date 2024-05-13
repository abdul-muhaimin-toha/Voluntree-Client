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
import BeAVolunteerPage from "./pages/BeAVolunteerPage";
import LoggedInRoute from "./PrivateRoutes/LoggedInRoute";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import MyPostPage from "./pages/MyPostPage";
import UpdateVolunteerNeedPost from "./pages/UpdateVolunteerNeedPost";
import ErrorPage from "./pages/ErrorPage";
import AllVolunteerOpportunities from "./pages/AllVolunteerOpportunities";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route
        path="sign-in"
        element={
          <LoggedInRoute>
            <SignInPage />
          </LoggedInRoute>
        }
      />
      <Route
        path="registration"
        element={
          <LoggedInRoute>
            <RegistrationPage />
          </LoggedInRoute>
        }
      />
      <Route
        path="volunteer-opportunities"
        element={<AllVolunteerOpportunities />}
      />
      <Route
        path="add-volunteer-post"
        element={
          <PrivateRoute>
            <AddVolunteerPostPage />
          </PrivateRoute>
        }
      />
      <Route
        path="post-details/:id"
        element={
          <PrivateRoute>
            <VolunteerPostDetailsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="be-a-volunteer/:id"
        element={
          <PrivateRoute>
            <BeAVolunteerPage />
          </PrivateRoute>
        }
      />
      <Route
        path="manage-my-posts"
        element={
          <PrivateRoute>
            <MyPostPage />
          </PrivateRoute>
        }
      />
      <Route
        path="update-my-post/:id"
        element={
          <PrivateRoute>
            <UpdateVolunteerNeedPost />
          </PrivateRoute>
        }
      />
    </Route>,
  ),
);
