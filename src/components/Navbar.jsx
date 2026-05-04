"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {

  const { data: session, isPending } = authClient.useSession()
  const user = session?.user;
  console.log(user, "user")


  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b border-[#e1e1e1] px-2">
      <nav className="flex justify-between items-center py-3 container mx-auto w-full">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-photos">All Photos</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex gap-4">
          {user ? (
          <div className='flex gap-2 items-center'>
            <h2>Hello, <span className='text-pink-500 font-bold'>{user.name}</span></h2>
            <Image alt='user' src={user.image || ""} width={40} height={40} className='rounded-full' href='/profile'></Image>
            <button className='btn btn-soft btn-secondary rounded-full' onClick={async () => await authClient.signOut()}>Logout</button>
          </div>
        )
          :
          (
            <>
              <div>
                <Link href="/signup">
                  <button className="btn btn-soft btn-primary rounded-full">SignUp</button>
                </Link>
                <Link href="/signin">
                  <button className="btn btn-soft btn-secondary rounded-full">SignIn</button>
                </Link>
              </div>
            </>

          )}
        </div>
        

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`h-[2px] w-6 bg-current transition ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-[2px] w-6 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-6 bg-current transition ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}>
        <ul className="flex flex-col gap-3 px-4 pt-2 pb-2 text-sm">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/all-photos" onClick={() => setMenuOpen(false)}>All Photos</Link></li>
          <li><Link href="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
        </ul>

        <div className="gap-3 px-4 pb-4">
          {user ? (
          <div className='gap-2 items-center'>
            <div className="flex items-center gap-4 mt-2 mb-4">
            <h2>Hello, <span className='text-pink-500 font-bold'>{user.name}</span></h2>
            </div>
            
            <div className="flex gap-4">
              <Image alt='user' src={user.image || ""} width={40} height={40} className='rounded-full' href='/profile'></Image>
              <button className='btn btn-soft btn-secondary rounded-full' onClick={async () => await authClient.signOut()}>Logout</button>
            </div>
            
            
          </div>
        )
          :
          (
            <>
              <div>
                <Link href="/signup">
                  <button className="btn btn-soft btn-primary rounded-full">SignUp</button>
                </Link>
                <Link href="/signin">
                  <button className="btn btn-soft btn-secondary rounded-full">SignIn</button>
                </Link>
              </div>
            </>

          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;