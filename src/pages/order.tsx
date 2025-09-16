import React, { useState } from "react";
import Header from "../components/Header";
import { Plus, Minus, ArrowLeft, ArrowRight } from "lucide-react";

// Interfaces
interface Product {
  name: string;
  price: number;
  quantity: number;
}

interface CakeOption {
  name: string;
  image: string;
  price: number;
}

interface CakeSpecs {
  massa: string;
  recheio: string;
  cobertura: string;
  tamanho: string;
  nome: string;
  total: number;
}

// Component
const BakeryPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { name: "Pão", price: 10.0, quantity: 0 },
    { name: "Cookie", price: 8.0, quantity: 0 },
    { name: "Macaron", price: 6.0, quantity: 0 },
    { name: "Croissant", price: 12.0, quantity: 0 },
  ]);

  const [customerName, setCustomerName] = useState("");

  const [cakeSpecs, setCakeSpecs] = useState<CakeSpecs>({
    massa: "baunilha",
    recheio: "morango",
    cobertura: "chocolate",
    tamanho: "pequeno",
    nome: "",
    total: 85.0,
  });

  // Opções do bolo
  const massaOptions: CakeOption[] = [
    { name: "baunilha", image: "./images/vanilla_cake.png", price: 20 },
    { name: "chocolate", image: "/images/chocolate_cake.png", price: 25 },
    { name: "red velvet", image: "/images/redVelvet_cake.png", price: 22 },
  ];

  const recheioOptions: CakeOption[] = [
    { name: "morango", image: "/images/strawberry_filling.png", price: 15 },
    { name: "chocolate", image: "/images/chocolate_filling.png", price: 18 },
    { name: "caramelo", image: "/images/caramel_filling.png", price: 20 },
  ];

  const coberturaOptions: CakeOption[] = [
    { name: "chocolate", image: "/images/chocolate_frosting.png", price: 30 },
    { name: "baunilha", image: "/images/vanilla_frosting.png", price: 25 },
    { name: "morango", image: "/images/strawberry_frosting.png", price: 35 },
  ];

  const tamanhoOptions = [
    { name: "pequeno", multiplier: 1 },
    { name: "médio", multiplier: 1.5 },
    { name: "grande", multiplier: 2 },
  ];

  // Funções auxiliares
  const getCurrentMassaOption = () =>
    massaOptions.find((opt) => opt.name === cakeSpecs.massa) || massaOptions[0];
  const getCurrentRecheioOption = () =>
    recheioOptions.find((opt) => opt.name === cakeSpecs.recheio) ||
    recheioOptions[0];
  const getCurrentCoberturaOption = () =>
    coberturaOptions.find((opt) => opt.name === cakeSpecs.cobertura) ||
    coberturaOptions[0];

  const calculateCakeTotal = (specs?: Partial<CakeSpecs>) => {
    const currentSpecs = specs ? { ...cakeSpecs, ...specs } : cakeSpecs;

    const massa =
      massaOptions.find((opt) => opt.name === currentSpecs.massa) ||
      massaOptions[0];
    const recheio =
      recheioOptions.find((opt) => opt.name === currentSpecs.recheio) ||
      recheioOptions[0];
    const cobertura =
      coberturaOptions.find((opt) => opt.name === currentSpecs.cobertura) ||
      coberturaOptions[0];
    const multiplier =
      tamanhoOptions.find((opt) => opt.name === currentSpecs.tamanho)
        ?.multiplier || 1;

    return (massa.price + recheio.price + cobertura.price) * multiplier;
  };

  const updateCakeSpecs = (field: keyof CakeSpecs, value: string) => {
    setCakeSpecs((prev) => {
      const updated = { ...prev, [field]: value };
      if (field !== "nome") {
        updated.total = calculateCakeTotal(updated);
      }
      return updated;
    });
  };

  const changeCakePart = (
    part: "massa" | "recheio" | "cobertura" | "tamanho",
    direction: "next" | "prev"
  ) => {
    let options: any[] = [];
    let currentValue = "";

    switch (part) {
      case "massa":
        options = massaOptions;
        currentValue = cakeSpecs.massa;
        break;
      case "recheio":
        options = recheioOptions;
        currentValue = cakeSpecs.recheio;
        break;
      case "cobertura":
        options = coberturaOptions;
        currentValue = cakeSpecs.cobertura;
        break;
      case "tamanho":
        options = tamanhoOptions;
        currentValue = cakeSpecs.tamanho;
        break;
    }

    const currentIndex = options.findIndex((opt) => opt.name === currentValue);
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % options.length
        : (currentIndex - 1 + options.length) % options.length;

    updateCakeSpecs(part, options[newIndex].name);
  };

  const updateQuantity = (index: number, change: number) => {
    setProducts((prev) =>
      prev.map((product, i) =>
        i === index
          ? { ...product, quantity: Math.max(0, product.quantity + change) }
          : product
      )
    );
  };

  const getTotalPrice = () =>
    products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

  const handleOrderSubmit = () => {
    alert("Pedido confirmado!");
  };

  // JSX
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#F6F3EC] mx-auto space-y-12 pt-32">
        {/* Faça seu pedido */}
        <section className="p-6">
          <h2 className="text-2xl font-bold text-center text-[#6A0201] mb-8">
            Faça seu pedido
          </h2>
          <div className="bg-[#FDFDFB] p-8 shadow-lg max-w-md mx-auto">
            <div className="border-2 border-dashed border-[#8B8787] p-6">
              <table className="w-full text-[#6A0201]">
                <thead>
                  <tr className="border-b border-[#6A0201]">
                    <th className="text-left py-2">Produto</th>
                    <th className="text-center py-2">Preço</th>
                    <th className="text-center py-2">Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr
                      key={product.name}
                      className="border-b border-[#6A0201]"
                    >
                      <td className="py-3 text-[#212020]">{product.name}</td>
                      <td className="text-center py-3 text-[#212020]">
                        R$ {product.price.toFixed(2)}
                      </td>
                      <td className="text-center py-3">
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() => updateQuantity(index, -1)}
                            className="w-6 h-6 border border-gray-700 rounded-md hover:bg-[#C4C1C1] flex items-center justify-center text-[#212020]"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-[#212020]">
                            {product.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(index, 1)}
                            className="w-6 h-6 border border-gray-700 rounded-md hover:bg-[#C4C1C1] flex items-center justify-center text-[#212020]"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-[#6A0201]">
                    Total do pedido:
                  </span>
                  <span className="font-bold text-[#6A0201]">
                    R$ {getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <div className="mb-4">
                  <label className="block text-[#212020] mb-2">Seu nome:</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7B0402]"
                    placeholder="Digite seu nome..."
                  />
                </div>
                <button
                  onClick={handleOrderSubmit}
                  className="w-full bg-[#6A0201] hover:bg-[#560100] text-white font-bold py-3 px-4 rounded transition-colors"
                >
                  Confirmar pedido
                </button>
                <p className="text-xs text-[#6A0201] text-center mt-2">
                  *Pedidos apenas para retirada
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Encomende seu bolo */}
        <section className="max-w-4xl mx-auto border-t-2 border-[#6A0201] py-32">
          <h2 className="text-2xl font-bold text-center text-[#6A0201] mb-8">
            Encomende seu bolo
          </h2>

          <div className="bg-[#FDFDFB] shadow-lg p-8 flex flex-col lg:flex-row gap-8 items-center">
            {/* Especificações */}
            <div className="flex-1">
              <div className="border border-dashed border-gray-900 p-6 max-w-sm">
                <div className="space-y-4">
                  {["massa", "recheio", "cobertura", "tamanho"].map((field) => (
                    <div key={field} className="flex justify-between">
                      <span className="text-gray-900 capitalize">{field}:</span>
                      <span className="text-gray-900 font-medium">
                        {(cakeSpecs as any)[field]}
                      </span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-[#6A0201]">
                    <div className="mb-3">
                      <label className="block text-gray-900 mb-1">
                        Seu nome:
                      </label>
                      <input
                        type="text"
                        value={cakeSpecs.nome}
                        onChange={(e) =>
                          setCakeSpecs((prev) => ({
                            ...prev,
                            nome: e.target.value,
                          }))
                        }
                        className="w-full border border-gray-400 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#7B0402]"
                        placeholder="Digite seu nome..."
                      />
                    </div>
                    <div className="flex justify-between font-bold text-[#6A0201]">
                      <span>Total:</span>
                      <span>R$ {cakeSpecs.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controles e imagens */}
            <div className="relative w-80 h-80 flex items-center justify-center mx-auto">
              {/* Setas da esquerda */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
                <button
                  onClick={() => changeCakePart("massa", "prev")}
                  className="text-orange-600 hover:text-orange-800 hover:scale-110 transition-all"
                >
                  <ArrowLeft size={28} />
                </button>
                <button
                  onClick={() => changeCakePart("recheio", "prev")}
                  className="text-orange-600 hover:text-orange-800 hover:scale-110 transition-all"
                >
                  <ArrowLeft size={28} />
                </button>
                <button
                  onClick={() => changeCakePart("cobertura", "prev")}
                  className="text-orange-600 hover:text-orange-800 hover:scale-110 transition-all"
                >
                  <ArrowLeft size={28} />
                </button>
              </div>

              {/* Imagens do bolo */}
              <div className="relative w-64 h-64">
                <img
                  src={getCurrentMassaOption().image}
                  alt={cakeSpecs.massa}
                  className={`absolute z-20 inset-0 rounded-lg transition-all duration-500 ${
                    cakeSpecs.tamanho === "pequeno"
                      ? "scale-90"
                      : cakeSpecs.tamanho === "médio"
                      ? "scale-100"
                      : "scale-110"
                  }`}
                />
                <img
                  src={getCurrentRecheioOption().image}
                  alt={cakeSpecs.recheio}
                  className={`absolute z-30 inset-0 rounded-lg transition-all duration-500 ${
                    cakeSpecs.tamanho === "pequeno"
                      ? "scale-90"
                      : cakeSpecs.tamanho === "médio"
                      ? "scale-100"
                      : "scale-110"
                  }`}
                />
                <img
                  src={getCurrentCoberturaOption().image}
                  alt={cakeSpecs.cobertura}
                  className={`absolute z-0 inset-0 rounded-lg transition-all duration-500 ${
                    cakeSpecs.tamanho === "pequeno"
                      ? "scale-90"
                      : cakeSpecs.tamanho === "médio"
                      ? "scale-100"
                      : "scale-110"
                  }`}
                />
              </div>

              {/* Setas da direita */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
                <button
                  onClick={() => changeCakePart("massa", "next")}
                  className="text-orange-600 hover:text-orange-800 hover:scale-110 transition-all"
                >
                  <ArrowRight size={28} />
                </button>
                <button
                  onClick={() => changeCakePart("recheio", "next")}
                  className="text-orange-600 hover:text-orange-800 hover:scale-110 transition-all"
                >
                  <ArrowRight size={28} />
                </button>
                <button
                  onClick={() => changeCakePart("cobertura", "next")}
                  className="text-orange-600 hover:text-orange-800 hover:scale-110 transition-all"
                >
                  <ArrowRight size={28} />
                </button>
              </div>
              {/* Controles de tamanho */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
                {/* Seta esquerda */}
                <button
                  onClick={() => changeCakePart("tamanho", "prev")}
                  className="text-orange-600 hover:text-orange-800 hover:scale-110 transition-all"
                >
                  <ArrowLeft size={24} />
                </button>

                {/* Indicador de tamanho */}
                <div className="text-center">
                  <span className="text-2xl">
                    {cakeSpecs.tamanho === "pequeno"
                      ? "🧁"
                      : cakeSpecs.tamanho === "médio"
                      ? "🎂"
                      : "🏰"}
                  </span>
                  <div className="text-sm text-orange-700">
                    {cakeSpecs.tamanho}
                  </div>
                </div>

                {/* Seta direita */}
                <button
                  onClick={() => changeCakePart("tamanho", "next")}
                  className="text-orange-600 hover:text-orange-800 hover:scale-110 transition-all"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={handleOrderSubmit}
                className="w-full bg-[#6A0201] hover:bg-[#560100] text-white font-bold py-3 px-4 rounded transition-colors"
              >
                Confirmar pedido
              </button>
              <p className="text-xs text-[#6A0201] mt-2">
                *Pedidos apenas para retirada
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BakeryPage;
