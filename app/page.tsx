import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <h1 className="text-4xl">Welcome to the Blog</h1>
      <p>COntent</p>
    </section>
  );
}
