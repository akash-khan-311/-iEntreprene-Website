import ActiveLinks from "@/components/Shared/ActiveLinks";
import ThemeToggle from "@/components/Theme/ThemeToggle";
// import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

//  <ActiveLinks path={link.href}>{link.name}</ActiveLinks>
const NavItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Courses", path: "/courses" },
];

const Navbar = () => {
  return (
    <div className="fixed block w-full top-0">
      <div className=" py-3">
      <div className="container mx-auto px-3 md:px-0">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-semibold text-[#f28523]">Logo</h1>
        </div>
        <div className="flex items-center gap-x-10">
          <ul className="flex gap-x-5 text-slate-950 dark:text-gray-100">
            {NavItems.map((link) => (
              <li key={link.name} className="text-xl">
                <ActiveLinks path={link.path}>{link.name}</ActiveLinks>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Navbar;
