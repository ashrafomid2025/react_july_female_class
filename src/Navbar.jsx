import { Link } from "react-router-dom";

const navList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Services",
    href: "/services",
  },
];
export default function Navbar() {
  return (
    <div className="py-4 px-8 bg-blue-500 flex gap-8 justify-between">
      {navList.map((x) => {
        return <Link to={x.href}>{x.name}</Link>;
      })}
    </div>
  );
}
