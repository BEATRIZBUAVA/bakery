import React from "react";

const Hero: React.FC = () => {
  const handleScrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      {/* Seção topo */}
      <section className="text-center pt-16 flex flex-col items-center">
        <h2 className="text-6xl">Bakery</h2>
        <div className="flex flex-row items-center gap-4">
          <i className="text-lg">desde</i>
          <img
            src="/images/red_cake.png"
            alt="desenho de um bolo vermelho"
            className="h-[40vh] max-h-[300px] object-contain"
          />
          <i className="text-lg">2015</i>
        </div>
      </section>

      {/* Seção principal */}
      <section className="bg-[url('/images/pink_background.png')] bg-contain bg-no-repeat bg-center text-center py-24 px-6 md:px-16 flex flex-col  items-center gap-10">
        {/* Vetores esquerda */}

        {/* Texto central */}
        <div className="  text-[#222020] mb-6 flex flex-col items-center justify-center max-w-2xl px-4 ">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl leading-tight">
            Bem vindo a nossa padaria!
          </h1>
          <p className="font-amatic-sc-regular font-bold text-xl sm:text-2xl my-10">
            Doces artesanais feitos com carinho ♡
          </p>
          <button
            className="bg-[#6A0201] text-[#F7F3E8] font-bold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition"
            onClick={handleScrollToProducts}
          >
            Ver nossos produtos
          </button>
        </div>

        {/* Vetores direita */}
      </section>
    </main>
  );
};

export default Hero;
