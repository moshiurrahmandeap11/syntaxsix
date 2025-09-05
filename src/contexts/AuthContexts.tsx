import { createContext } from "react";
import { User, UserCredential } from "firebase/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => void;
  googleLogin: () => Promise<UserCredential>;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
}

export const AuthContext = createContext<AuthContextType | null>(null);
