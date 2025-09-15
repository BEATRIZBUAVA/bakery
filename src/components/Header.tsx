import { Link, useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className="fixed w-full z-50 flex justify-between items-center p-6 bg-[#f5f1ec] border-b-2 border-[#6A0201]">
      <div className="text-xl font-bold">Bakery</div>
      <nav className="space-x-6">
        <Link to="/" className="hover:underline">
          home
        </Link>
        <button
          className="hover:underline bg-transparent border-none cursor-pointer"
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
              setTimeout(() => scrollToSection("products"), 100);
            } else {
              scrollToSection("products");
            }
          }}
        >
          produtos
        </button>
        <button
          className="hover:underline bg-transparent border-none cursor-pointer"
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
              setTimeout(() => scrollToSection("about"), 100);
            } else {
              scrollToSection("about");
            }
          }}
        >
          sobre
        </button>
        <button
          className="hover:underline bg-transparent border-none cursor-pointer"
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
              setTimeout(() => scrollToSection("contact"), 100);
            } else {
              scrollToSection("contact");
            }
          }}
        >
          contato
        </button>
        <Link to="/order" className="hover:underline">
          pedidos
        </Link>
      </nav>
    </header>
  );
};
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export default Header;
