import { useState, useMemo } from "react";
import { CakeCustomization, CartItem, CakeOptions } from "../types";

interface UseCakeCustomizerProps {
  options: CakeOptions;
  basePrice: number;
}

export const useCakeCustomizer = ({
  options,
  basePrice,
}: UseCakeCustomizerProps) => {
  const [customization, setCustomization] = useState<CakeCustomization>({
    cobertura: 0,
    recheio: 0,
    massa: 0,
  });

  const [cart, setCart] = useState<CartItem[]>([]);

  const totalPrice = useMemo(() => {
    return (
      basePrice +
      options.cobertura[customization.cobertura].preco +
      options.recheio[customization.recheio].preco +
      options.massa[customization.massa].preco
    );
  }, [customization, options, basePrice]);

  const changeOption = (
    type: keyof CakeCustomization,
    direction: "next" | "prev"
  ) => {
    setCustomization((prev) => {
      const newIndex =
        direction === "next"
          ? (prev[type] + 1) % options[type].length
          : (prev[type] - 1 + options[type].length) % options[type].length;
      return { ...prev, [type]: newIndex };
    });
  };

  const addToCart = () => {
    const newItem: CartItem = {
      id: Date.now(),
      cobertura: options.cobertura[customization.cobertura].nome,
      recheio: options.recheio[customization.recheio].nome,
      massa: options.massa[customization.massa].nome,
      preco: totalPrice,
    };
    setCart((prev) => [...prev, newItem]);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    customization,
    cart,
    totalPrice,
    changeOption,
    addToCart,
    removeFromCart,
  };
};
