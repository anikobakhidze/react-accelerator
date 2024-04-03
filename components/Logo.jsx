import React from "react";
import Image from "next/image";
import Link from "next/link";
function Logo({ logo }) {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" priority={false} />
    </Link>
  );
}

export default Logo;
