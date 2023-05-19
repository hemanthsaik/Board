"use client";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/dashbord");
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
              Signin and apple auth is under testing please signIn through
              google
            </p>
            <h1 className="text-4xl font-bold">Sign in</h1>
            <p>Sign in to your account</p>
          </div>

          {/* Card */}

          <div className="w-[385px]    p-7 bg-white rounded-xl flex flex-col gap-5">
            <button
              type="button"
              onClick={() => signIn("google")}
              className="px-5 py-1 border flex gap-2 items-center bg-white text-xs font-light text-[#858585] rounded-[10px] hover:bg-black hover:text-gray-100"
            >
              <Image
                src="/assets/icons/google.svg"
                alt="google logo"
                width={30}
                height={30}
              />{" "}
              <p>Sign in with Google</p>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
