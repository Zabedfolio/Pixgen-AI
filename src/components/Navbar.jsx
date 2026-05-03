"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close menu when switching to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  return (
    <div className="border-b border-[#e1e1e1] px-2">
      <nav className="flex justify-between items-center py-3 container mx-auto w-full">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <ul className="flex items-center gap-5 text-sm">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/all-photos"}>All Photos</Link></li>
            <li><Link href={"/profile"}>Profile</Link></li>
          </ul>
        )}

        {/* Desktop Auth Buttons */}
        {!isMobile && (
          <div className="flex gap-4">
            <ul className="flex items-center text-sm gap-4">
              <li>
                <Link href={"/signup"}>
                  <button className="btn btn-soft btn-primary rounded-full">SignUp</button>
                </Link>
              </li>
              <li>
                <Link href={"/signin"}>
                  <button className="btn btn-soft btn-secondary rounded-full">SignIn</button>
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            className="flex flex-col justify-center items-center gap-1.5 p-1"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: "block",
                height: "2px",
                width: "24px",
                backgroundColor: "currentColor",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                width: "24px",
                backgroundColor: "currentColor",
                transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                width: "24px",
                backgroundColor: "currentColor",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </button>
        )}
      </nav>

      {/* Mobile Dropdown */}
      {isMobile && (
        <div
          style={{
            overflow: "hidden",
            maxHeight: menuOpen ? "300px" : "0px",
            transition: "max-height 0.3s ease",
          }}
        >
          <ul className="flex flex-col items-start gap-3 text-sm px-4 pt-2 pb-2">
            <li><Link href={"/"} onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href={"/all-photos"} onClick={() => setMenuOpen(false)}>All Photos</Link></li>
            <li><Link href={"/profile"} onClick={() => setMenuOpen(false)}>Profile</Link></li>
          </ul>
          <div className="flex gap-3 px-4 pb-4">
            <Link href={"/signup"} onClick={() => setMenuOpen(false)}>
              <button className="btn btn-soft btn-primary btn-sm rounded-full">SignUp</button>
            </Link>
            <Link href={"/signin"} onClick={() => setMenuOpen(false)}>
              <button className="btn btn-soft btn-secondary btn-sm rounded-full">SignIn</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;