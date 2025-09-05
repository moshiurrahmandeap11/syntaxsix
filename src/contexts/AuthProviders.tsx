"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { AuthContext } from "./AuthContexts";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthProvidersProps {
  children: ReactNode;
}

const googleProvider = new GoogleAuthProvider();

export const AuthProviders = ({ children }: AuthProvidersProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

//   google login function
const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

// email password signup function
const createUser = async (email: string, password: string) => {
  setLoading(true);
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (err) {
    throw err;
  } finally {
    setLoading(false);
  }
};

// email password login function
const loginUser = async (email: string, password: string) => {
    setLoading(true);
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (err) {
        throw err;
    } finally {
        setLoading(false);
    }
};



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, googleLogin, createUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
