import React from "react";
import { Link } from "react-router-dom";

const Subtitle: React.FC = () => {
  return (
    <section className="bg-[#f5f1ec] flex flex-row justify-between py-32 relative overflow-hidden">
      <img
        src="./public/images/blue_cake.png"
        alt=""
        className="absolute h-[80vh] -ml-32 -top-16 rotate-[20deg] "
      />
      <div className="relative flex flex-col justify-center items-center max-w-md mx-auto text-center border-2 border-dotted border-black p-24">
        <img
          src="./public/images/red_bow.png"
          alt="Laço decorativo"
          className="absolute -top-14 -right-28 rotate-[25deg] -translate-x-1/2 h-32"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
          eleifend ex. Nam purus mi, consequat in pharetra finibus, consequat in
          dolor.
        </p>
        <Link to="/order">
          <button className="bg-[#5a1f1f] text-white px-6 py-3 rounded mt-6">
            Faça seu pedido
          </button>
        </Link>
      </div>
      <img
        src="./public/images/pink_cake.png"
        alt=""
        className="absolute h-[80vh] -right-48 top-24 -rotate-[25deg]"
      />
    </section>
  );
};

export default Subtitle;
