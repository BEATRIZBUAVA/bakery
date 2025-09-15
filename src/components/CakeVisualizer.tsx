import React from "react";
import { CakeCustomization, CakeOptions } from "../types";

interface CakeVisualizerProps {
  customization: CakeCustomization;
  options: CakeOptions;
  totalPrice: number;
  onAddToCart: () => void;
}

export const CakeVisualizer: React.FC<CakeVisualizerProps> = ({
  customization,
  options,
  totalPrice,
  onAddToCart,
}) => {
  const currentCobertura = options.cobertura[customization.cobertura];
  const currentRecheio = options.recheio[customization.recheio];
  const currentMassa = options.massa[customization.massa];

  return (
    <div className="relative">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-pink-200">
        <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
          {/* Decorações de fundo */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl opacity-50"></div>

          {/* Bolo 3D */}
          <div className="relative">
            {/* Base do prato */}
            <div className="w-72 h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full shadow-lg mb-2"></div>

            {/* Massa do bolo */}
            <div
              className="w-64 h-32 rounded-lg shadow-xl relative mb-2"
              style={{
                backgroundColor: currentMassa.cor,
                background: `linear-gradient(45deg, ${currentMassa.cor}, ${currentMassa.cor}dd)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg"></div>
            </div>

            {/* Recheio */}
            <div
              className="w-64 h-8 shadow-lg relative mb-2 rounded-sm"
              style={{ backgroundColor: currentRecheio.cor }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-sm"></div>
            </div>

            {/* Segunda camada da massa */}
            <div
              className="w-64 h-32 rounded-lg shadow-xl relative mb-2"
              style={{
                backgroundColor: currentMassa.cor,
                background: `linear-gradient(45deg, ${currentMassa.cor}, ${currentMassa.cor}dd)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg"></div>
            </div>

            {/* Cobertura */}
            <div
              className="w-64 h-16 rounded-t-3xl shadow-xl relative"
              style={{
                backgroundColor: currentCobertura.cor,
                background: `linear-gradient(45deg, ${currentCobertura.cor}, ${currentCobertura.cor}ee)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/20 rounded-t-3xl"></div>
              {/* Decorações da cobertura */}
              <div className="absolute top-2 left-8 w-4 h-4 bg-pink-300 rounded-full opacity-80"></div>
              <div className="absolute top-3 right-12 w-3 h-3 bg-rose-400 rounded-full opacity-60"></div>
              <div className="absolute top-1 right-20 w-2 h-2 bg-pink-400 rounded-full opacity-70"></div>
            </div>
          </div>

          {/* Sparkles decorativos */}
          <div className="absolute top-12 left-12 text-2xl animate-pulse">
            ✨
          </div>
          <div className="absolute top-20 right-8 text-xl animate-pulse delay-500">
            💫
          </div>
          <div className="absolute bottom-16 left-8 text-lg animate-pulse delay-1000">
            ⭐
          </div>
        </div>

        {/* Preço */}
        <div className="text-center mt-6">
          <div className="text-3xl font-bold text-pink-700 mb-2">
            R$ {totalPrice.toFixed(2)}
          </div>
          <button
            onClick={onAddToCart}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
          >
            Adicionar ao Carrinho 🛒
          </button>
        </div>
      </div>
    </div>
  );
};
