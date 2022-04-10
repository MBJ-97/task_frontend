import Image from "next/image";
import Link from "next/link";
import Logo from "../public/Vector.png";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center px-8 mt-4">
        <Link href="/">
          <a>
            <Image
              src={Logo}
              width={70}
              height={70}
              alt="Personal logo"
            ></Image>
          </a>
        </Link>
        <Link href="/createProduct">
          <a>
            <button className="px-6 h-14 text-emerald-500 border-2 border-emerald-500 rounded-xl hover:bg-emerald-500 hover:text-white transition ease-in-out delay-50">
              Add product
            </button>
          </a>
        </Link>
      </nav>
    </div>
  );
}
