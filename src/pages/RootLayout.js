import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { userSliceActions } from "../store/userSlice";

const RootLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("validating auth from firebase...");
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // console.log("user is logged in - ", user);
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          userSliceActions.addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/");
      } else {
        // User is signed out
        // ...
        // console.log("user not signed in.");
        dispatch(userSliceActions.removeUser());
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
