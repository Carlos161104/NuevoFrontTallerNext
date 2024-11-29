"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavItemProps {
  icon: ReactNode;
  path: string;
  disable: boolean;
}

const NavItem = ({ icon, path, disable }: NavItemProps) => {
  const pathName = usePathname();
  return (
    <Link 
      href={disable ? "#" : path} 
      className={`w-full flex justify-center ${disable ? 'cursor-not-allowed opacity-50' : ''}`}
      onClick={(e) => disable && e.preventDefault()}
    >
      <span className={pathName === path ? "bg-orange-400 w-10/12 flex justify-center rounded-md transition-colors py-2" : "w-10/12 py-2"}>
        {icon}
      </span>
    </Link>
  );
}

export default NavItem;
