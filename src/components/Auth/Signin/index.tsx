"use client";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import GoogleSigninButton from "../GoogleSigninButton";
import SigninWithPassword from "../SigninWithPassword";
import { UserContext } from "@/core/providers/user-provider";
import { useRouter } from "next/navigation";
import { Routes } from "@/core/config/routes";


export default function Signin() {




  return (
    <>
     
      <div>
        <SigninWithPassword />
      </div>

    </>
  );
}
