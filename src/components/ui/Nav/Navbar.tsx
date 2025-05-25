import ActiveLinks from "@/components/Shared/ActiveLinks";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

//  <ActiveLinks path={link.href}>{link.name}</ActiveLinks>
const NavItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Courses", path: "/courses" },
];

const Navbar = () => {
  return (
    <div className="dark:bg-gray-300 bg-gray-800 py-3 transition-all duration-500">
      <div className="container mx-auto px-3 md:px-0">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-semibold">Logo</h1>
        </div>
        <div className="flex items-center gap-x-10">
          <ul className="flex gap-x-5 text-white dark:text-gray-800">
            {NavItems.map((link) => (
              <li key={link.name} className="text-xl">
                <ActiveLinks path={link.path}>{link.name}</ActiveLinks>
              </li>
            ))}
          </ul>
          <ThemeSwitcher/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
