"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import useAuth from "@/hooks/queries/use-auth";
import { useRouter } from "next/navigation";
import { UserContext } from "@/core/providers/user-provider";
import { Routes } from "@/core/config/routes";

const SigninWithPassword: React.FC = () => {
  const { doSignIn, isLoadingSignIn } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const {user} = useContext(UserContext);
const router = useRouter()


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

  useEffect(()=>{
    if(user){
      router.push(Routes.home)
    }
  })

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}

      <div className="mb-4">
        <label htmlFor="email" className="mb-2.5 block font-medium text-dark dark:text-white">
         Correo electrónico
        </label>
        <div className="relative">
          <input
            type="email"
            placeholder="Ingresa correo electrónico"
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
         Contraseña
        </label>
        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="Ingresa contraseña"
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          {/* SVG Icon */}
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-2 py-2">
        
        <Link
          href="/auth/forgot-password"
          className="select-none font-satoshi text-base font-medium text-dark underline duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
        >
          Olvidó su contraseña?
        </Link>
      </div>

      <div className="mb-4.5">
        <button
          type="submit"
          disabled={isLoadingSignIn}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
        >
          {isLoadingSignIn ? "Iniciando sesión..." : "Iniciar sesión"}
        </button>
      </div>
    </form>
  );
};

export default SigninWithPassword;
