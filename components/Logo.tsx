import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div>
      <Image
        className="rounded-full"
        src="/images/shopl_tech.png"
        width={100}
        height={100}
        alt="logo"
      />
    </div>
  );
}

export default Logo;
