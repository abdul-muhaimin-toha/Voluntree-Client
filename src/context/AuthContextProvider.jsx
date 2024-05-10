import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import PropTypes from "prop-types";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const createNewUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailPassLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const updateUserProfile = (name, photo) => {
    setIsLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authValue = {
    user,
    isLoading,
    setIsLoading,
    createNewUser,
    emailPassLogin,
    googleLogin,
    githubLogin,
    logout,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthContextProvider;
