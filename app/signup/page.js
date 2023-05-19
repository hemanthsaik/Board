"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { registerValidate } from "@/utils/validate";

const SignIn = () => {
  const [providers, setProviders] = useState(null);
  const router = useRouter();

  const { data: session, status } = useSession();

  if (status === "authenticated") {
    router.push("/dashbord");
  }

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: registerValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }
  return (
    <main className="flex bg-gray-100">
      <section className="bg-black h-screen w-2/5 flex-center">
        <h1 className="text-white text-5xl font-bold">Board.</h1>
      </section>
      <section className="h-screen w-3/5 flex-center">
        <div className="flex flex-col gap-4">
          <div>
            <p className="bg-red-400 p-2 rounded-xl text-white">
              Signup is under testing please signIn through google
            </p>
            <h1 className="text-4xl font-bold">Sign Up</h1>
            <p>Sign in to your account</p>
          </div>
          <div className="w-[385px] flex justify-between">
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="px-5 py-1 border flex gap-2 items-center bg-white text-xs font-light text-[#858585] rounded-[10px] hover:bg-black hover:text-gray-100"
                >
                  <Image
                    src={
                      provider.name === "Google"
                        ? `/assets/icons/google.svg`
                        : `/assets/icons/apple.svg`
                    }
                    alt="google logo"
                    width={provider.name === "Google" ? 20 : 15}
                    height={20}
                  />{" "}
                  <p>Sign in with {provider.name}</p>
                </button>
              ))}
          </div>

          {/* Card */}
          <form onSubmit={formik.handleSubmit}>
            <div className="w-[385px]    p-7 bg-white rounded-xl flex flex-col gap-5">
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
                <label>UserName</label>
                {formik.errors.username ? (
                  <span className="text-xs text-red-400">
                    {formik.errors.username}
                  </span>
                ) : (
                  <></>
                )}
                <input
                  type="text"
                  name="username"
                  className="bg-gray-100 px-3 py-2 outline-none rounded-xl"
                  placeholder="username"
                  {...formik.getFieldProps("username")}
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
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black py-2 text-white rounded-xl"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="text-center text-[#858585] text-sm">
            Have an account?
            <Link href="/signin" className="text-[#346BD4]">
              Sign In
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
