import React from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

const produtos = [
  {
    src: "/images/croissant.png",
    alt: "Croissant",
    caption: "Croissant assados todos os dias",
  },
  {
    src: "/images/macaron.png",
    alt: "Macarons",
    caption: "Macarons",
  },
  {
    src: "/images/bread.png",
    alt: "Pão",
    caption: "Pão de fermentação natural",
  },
  {
    src: "/images/cake.png",
    alt: "Bolo de chocolate com morango",
    caption: "Bolo personalizados",
  },

  {
    src: "/images/cookie.png",
    alt: "Cookies de chocolate",
    caption: "Cookies de chocolate belga",
  },
];
const Products: React.FC = () => {
  return (
    <section id="products" className="p-6 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-2 px-32 text-left">
          Nossos Produtos
        </h2>
        <div className="px-32 mb-8">
          <hr className=" border-[#5a1f1f] w-full max-w-[calc(100%-8rem)] border-0 border-t-2" />
        </div>

        <Carousel slides={produtos} />
      </div>
      <div>
        <Link to="/order">
          <button className="bg-[#5a1f1f] text-white px-6 py-3 rounded my-16">
            Faça seu pedido
          </button>
        </Link>

      </div>
    </section>
  );
};

export default Products;
