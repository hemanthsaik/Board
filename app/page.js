"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    router.push("/dashboard");
  }
  return (
    <main className="flex ">
      <section className="bg-black h-screen w-2/5 flex-center">
        <h1 className="text-white text-5xl font-bold">Board.</h1>
      </section>
      <section className="h-screen w-3/5 flex-center">
        <div className="flex flex-col gap-4">
          <Link
            href="/signup"
            className="px-5 py-2 border bg-white text-gray-500 rounded-full hover:bg-black hover:text-gray-100"
          >
            Sign Up
          </Link>
          <Link
            href="/signin"
            className="px-5 py-2 border bg-white text-gray-500 rounded-full hover:bg-black hover:text-gray-100"
          >
            Sign In
          </Link>
        </div>
      </section>
    </main>
  );
}
