import Link from "next/link";
import React from "react";
type NavlinkProps = {
  path: string;
  level: string;
};
export default function NavLink({ path, level }: NavlinkProps) {
  return (
    <Link href={path}>
      <li>{level}</li>
    </Link>
  );
}
