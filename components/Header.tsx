"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-3xl font-bold">blog</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/">홈</Link>
        <Link href="/about">어바웃</Link>
        <Link href="/posts">포스트</Link>
        <Link href="/contact">컨택</Link>
      </nav>
    </header>
  );
}
