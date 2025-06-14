import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>

      <div className="flex items-center gap-8">
        <NavItem />
        <SignedOut>
          <div className="flex items-center gap-2">
            <SignInButton>
              <button className="btn-signin">Sign In</button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
