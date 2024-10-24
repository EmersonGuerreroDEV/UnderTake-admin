"use client";
import React, { useState } from "react";
import Link from "next/link";
import useAuth from "@/hooks/queries/use-auth";

const SigninWithPassword: React.FC = () => {
  const { doSignIn, isLoadingSignIn } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      await doSignIn({ email, password });
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}

      <div className="mb-4">
        <label htmlFor="email" className="mb-2.5 block font-medium text-dark dark:text-white">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          {/* SVG Icon */}
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="password" className="mb-2.5 block font-medium text-dark dark:text-white">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          {/* SVG Icon */}
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-2 py-2">
        <label htmlFor="remember" className="flex cursor-pointer select-none items-center font-satoshi text-base font-medium text-dark dark:text-white">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            checked={remember}
            onChange={() => setRemember((prev) => !prev)}
            className="peer sr-only"
          />
          <span className={`mr-2.5 inline-flex h-5.5 w-5.5 items-center justify-center rounded-md border border-stroke bg-white text-white text-opacity-0 peer-checked:border-primary peer-checked:bg-primary peer-checked:text-opacity-100 dark:border-stroke-dark dark:bg-white/5`}>
            {/* Checkbox SVG */}
          </span>
          Remember me
        </label>

        <Link
          href="/auth/forgot-password"
          className="select-none font-satoshi text-base font-medium text-dark underline duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
        >
          Forgot Password?
        </Link>
      </div>

      <div className="mb-4.5">
        <button
          type="submit"
          disabled={isLoadingSignIn}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
        >
          {isLoadingSignIn ? "Signing In..." : "Sign In"}
        </button>
      </div>
    </form>
  );
};

export default SigninWithPassword;
