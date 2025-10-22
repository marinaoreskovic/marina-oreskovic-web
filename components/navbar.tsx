"use client";

import Link from "next/link";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <MotionTransition
      position="right"
      className="fixed inset-x-0 bottom-10 z-40 flex justify-center"
    >
      <nav className="max-w-fit">
        <div
          className="flex items-center gap-1 px-2 py-1 rounded-full
                     bg-black text-white shadow-lg backdrop-blur-md"
        >
          {itemsNavbar.map((item) => {
            const active = pathname === item.link;
            return (
              <Link
                key={item.id}
                href={item.link}
                className={`flex h-11 w-11 items-center justify-center rounded-full 
                            transition-colors duration-200 
                            ${active ? "bg-white/15" : "hover:bg-white/10"}`}
              >
                {/* asegurate de que tus SVG usen stroke='currentColor' o fill='currentColor' */}
                {item.icon}
              </Link>
            );
          })}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
