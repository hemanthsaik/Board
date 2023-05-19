"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { loginValidate } from "@/utils/validate";

const SignIn = () => {
  const router = useRouter();

  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/dashboard");
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit,
  });

  // async function onSubmit(values) {
  //   signIn("credentials", {
  //     redirect: false,
  //     email: values.email,
  //     username: values.username,
  //     password: values.password,
  //     callbackUrl,
  //   });
  // }
  async function onSubmit(values) {
    router.push("/signin-up-error");
  }
  return (
    <main className="flex bg-gray-100">
      <section className="bg-black h-screen w-2/5 flex-center">
        <h1 className="text-white text-5xl font-bold">Board.</h1>
      </section>
      <section className="h-screen w-3/5 flex-center">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-4xl font-bold">Sign In</h1>
            <p>Sign in to your account</p>
          </div>
          <div className="w-[385px] flex justify-between">
            <button
              type="button"
              onClick={() => signIn("google")}
              className="px-5 py-1 border flex gap-2 items-center bg-white text-xs font-light text-[#858585] rounded-[10px] hover:bg-black hover:text-gray-100"
            >
              <Image
                src="/assets/icons/google.svg"
                alt="google logo"
                width={20}
                height={20}
              />{" "}
              <p>Sign in with Google</p>
            </button>
            <button
              type="button"
              onClick={() => signIn("apple")}
              className="px-5 py-1 border flex gap-2 items-center bg-white text-xs font-light text-[#858585] rounded-[10px] hover:bg-black hover:text-gray-100"
            >
              <Image
                src="/assets/icons/apple.svg"
                alt="apple logo"
                width={15}
                height={20}
              />{" "}
              <p>Sign in with Apple</p>
            </button>
          </div>

          {/* Card */}
          <form onSubmit={formik.handleSubmit}>
            <div className="w-[385px]  p-7 bg-white rounded-xl flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label>Email address</label>
                {formik.errors.email ? (
                  <span className="text-xs text-red-400">
                    {formik.errors.email}
                  </span>
                ) : (
                  <></>
                )}
                <input
                  type="email"
                  name="email"
                  className="bg-gray-100 px-3 py-2 outline-none rounded-xl"
                  placeholder="johndoe@gmail.com"
                  {...formik.getFieldProps("email")}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Password</label>
                {formik.errors.password ? (
                  <span className="text-xs text-red-400">
                    {formik.errors.password}
                  </span>
                ) : (
                  <></>
                )}
                <input
                  type="password"
                  name="password"
                  className="bg-gray-100 px-3 py-2 outline-none rounded-xl"
                  placeholder="johndoe@gmail.com"
                  {...formik.getFieldProps("password")}
                />
              </div>
              <Link href="/signin-up-error" className="text-sm text-[#346BD4]">
                Forgot password?
              </Link>
              <button
                type="submit"
                className="w-full bg-black py-2 text-white rounded-xl"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="text-center text-[#858585] text-sm">
            Don't have an account?
            <Link href="/signup" className="text-[#346BD4]">
              Register here
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
