import React from "react";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="md:w-[500px] px-6">
      <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
        Sign Up
      </h2>
      <form className="w-full">
        <div className="mb-4 w-full">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Name
          </label>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"/>
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Re-type Password
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="Re-enter your password"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>

        <div className="mb-5">
          <input
            type="submit"
            value="Create account"
            className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
          />
        </div>
        <div className="mt-6 text-center">
          <p>
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-primary">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>

  );
}

export default SignUp;
