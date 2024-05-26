import Logo from "@/components/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    // wczesniej bylo black-primary i white
    <footer className="bg-primary text-white-primary">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 px-10 py-7">
        <div className="flex flex-col justify-center col-span-2 sm:col-span-1">
          <div className="flex gap-1">
            <Logo variant="white" />
          </div>
        </div>
        <nav className="text-sm">
          <h3 className="font-semibold mb-2">Check out</h3>
          <ul className="flex flex-col gap-1 underline">
            <li>
              <Link href="/men">Men</Link>
            </li>
            <li>
              <Link href="/women">Women</Link>
            </li>
            <li>
              <Link href="/new">New & Featured</Link>
            </li>
          </ul>
          <p></p>
        </nav>
        <div className="text-sm">
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="flex flex-col gap-1">
            <li>Phone: (+48) 123-456-789</li>
            <li>Email: sneakpeak@email.com</li>
            <li>Address: Warsaw, Złota 44</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
