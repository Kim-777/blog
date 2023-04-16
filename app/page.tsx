import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <Hero />
      <Suspense fallback={"loading.."}>
        {/* @ts-expect-error Server Component */}
        <FeaturedPosts />
      </Suspense>
    </section>
  );
}
