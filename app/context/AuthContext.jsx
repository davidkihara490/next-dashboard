"use client"

import { createContext, useState, useContext } from "react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const signIn = (email, password) => {
        // Dummy data for user authentication
        const users = [
            { email: "user@example.com", password: "password", role: "normal" },
            { email: "admin@example.com", password: "password", role: "admin" },
            { email: "superadmin@example.com", password: "password", role: "superadmin" },
        ];

        const foundUser = users.find((u) => u.email === email);

        console.log("User:", foundUser);

        if (foundUser) {
            setUser(foundUser);
            // Redirect based on role
            switch (foundUser.role) {
                case "normal":
                    router.push("/landing");
                    break;
                case "admin":
                    router.push("/dashboard");
                    break;
                case "superadmin":
                    router.push("/dashboard");
                    break;
                default:
                    break;
            }
        } else {
            alert("Invalid credentials!");
        }
    };

    const signOut = () => {
        setUser(null);
        router.push("/auth/signin");
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
