import React from "react";
import { CartItem } from "../types";

interface CartModalProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onRemoveItem?: (id: number) => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  items,
  onClose,
  onRemoveItem,
}) => {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.preco, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-96 overflow-y-auto p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-pink-700">Seu Carrinho</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Carrinho vazio</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-pink-50 p-4 rounded-lg relative">
                {onRemoveItem && (
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                )}
                <div className="text-sm text-gray-600 mb-1">
                  <strong>Massa:</strong> {item.massa}
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  <strong>Recheio:</strong> {item.recheio}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <strong>Cobertura:</strong> {item.cobertura}
                </div>
                <div className="text-lg font-bold text-pink-700">
                  R$ {item.preco.toFixed(2)}
                </div>
              </div>
            ))}

            <div className="border-t pt-4">
              <div className="text-xl font-bold text-pink-700">
                Total: R$ {total.toFixed(2)}
              </div>
              <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-lg mt-4 hover:from-pink-600 hover:to-rose-600 transition-all duration-300">
                Finalizar Pedido 🎉
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
