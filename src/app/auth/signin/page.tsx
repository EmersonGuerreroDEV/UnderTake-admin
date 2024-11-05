import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Signin from "@/components/Auth/Signin";

export const metadata: Metadata = {
  title: "Login | Undertake",
};

const SignIn: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Sign In" />

      <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex flex-wrap items-start">
          <div className="w-full ">
            <div className="max-w-screen-sm mx-auto p-8">
              <Signin />
            </div>
          </div>

        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignIn;
