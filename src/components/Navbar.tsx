"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/services"}>
        <MenuItem setActive={setActive} active={active} item="Services" />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Projects" />  
        <MenuItem setActive={setActive} active={active} item="About Us" />
        
      </Menu>
    </div>
  );
}
