"use client"

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";

const SignIn = () => {

  const { signIn } = useAuth();

  //Normal user
  // const [email, setEmail] = useState("user@example.com");
  // const [password, setPassword] = useState("password");

  //Admin
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("password");

  //SuperAdmin
  // const [email, setEmail] = useState("superadmin@example.com");
  // const [password, setPassword] = useState("password");

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(email, password);
  }

  return (
    <div className="md:w-[500px] px-6">
      <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
        Sign in
      </h2>
      <form onSubmit={handleSignIn} >
        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Email
          </label>
          <div className="relative">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Password
          </label>
          <div className="relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="6+ Characters, 1 Capital letter"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>

        <div className="mb-5">
          <input
            type="submit"
            value="Sign In"
            className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
          />
        </div>
        <div className="mt-6 text-center">
          <p>
            Don’t have any account?{" "}
            <Link href="/auth/signup" className="text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
