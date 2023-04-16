import React from "react";
import Image from "next/image";
import profileImage from "../public/images/profile.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="author"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">안녕, 난 예찬!</h2>
      <h3 className="text-xl font-semibold">프론트엔드</h3>
      <p>기록보단 기억을</p>
      <Link href="/contact">
        <button className="mt-2">연락하셈</button>
      </Link>
    </section>
  );
}
