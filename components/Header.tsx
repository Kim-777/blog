"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-4">
        <Link href="/" className="rounded-full">
          <Image
            className="rounded-full"
            src="/images/shopl_tech.png"
            width={150}
            height={150}
            alt="logo"
          />
        </Link>
        <h1 className="ml-1">샤플앤컴퍼니의 성장 이야기.</h1>
      </div>
      <div>
        <Link
          href="https://www.shoplworks.com/"
          className="px-5 py-3 text-sm md:text-base bg-[#3299FE] text-white flex items-center rounded-full text-center"
        >
          Shopl 공식 홈페이지 가기
        </Link>
      </div>
    </header>
  );
}
