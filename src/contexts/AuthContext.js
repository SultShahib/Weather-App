import { createContext, useContext, useEffect, useState } from "react";
// import { auth } from "../Authentication/firebase";
import { auth } from "../Authentication/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  async function signUp(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCred) => userCred.user
      );
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
