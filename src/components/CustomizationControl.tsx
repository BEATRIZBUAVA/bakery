import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CakeOption } from "../types";

interface CustomizationControlProps {
  title: string;
  currentOption: CakeOption;
  onPrevious: () => void;
  onNext: () => void;
  colorClass: string;
}

export const CustomizationControl: React.FC<CustomizationControlProps> = ({
  title,
  currentOption,
  onPrevious,
  onNext,
  colorClass,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${colorClass}`}
    >
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onPrevious}
          className={`bg-${
            colorClass.includes("pink")
              ? "pink"
              : colorClass.includes("rose")
              ? "rose"
              : "orange"
          }-400 hover:bg-${
            colorClass.includes("pink")
              ? "pink"
              : colorClass.includes("rose")
              ? "rose"
              : "orange"
          }-500 text-white p-2 rounded-full shadow-md transition-all duration-200`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="text-center flex-1">
          <h3
            className={`text-xl font-bold ${
              colorClass.includes("pink")
                ? "text-pink-700"
                : colorClass.includes("rose")
                ? "text-rose-700"
                : "text-orange-700"
            } mb-1`}
          >
            {title}
          </h3>
          <p
            className={`${
              colorClass.includes("pink")
                ? "text-pink-600"
                : colorClass.includes("rose")
                ? "text-rose-600"
                : "text-orange-600"
            } font-semibold`}
          >
            {currentOption.nome}
          </p>
          <p
            className={`text-sm ${
              colorClass.includes("pink")
                ? "text-pink-500"
                : colorClass.includes("rose")
                ? "text-rose-500"
                : "text-orange-500"
            }`}
          >
            +R$ {currentOption.preco.toFixed(2)}
          </p>
        </div>
        <button
          onClick={onNext}
          className={`bg-${
            colorClass.includes("pink")
              ? "pink"
              : colorClass.includes("rose")
              ? "rose"
              : "orange"
          }-400 hover:bg-${
            colorClass.includes("pink")
              ? "pink"
              : colorClass.includes("rose")
              ? "rose"
              : "orange"
          }-500 text-white p-2 rounded-full shadow-md transition-all duration-200`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div
        className="h-4 rounded-full shadow-inner"
        style={{ backgroundColor: currentOption.cor }}
      ></div>
    </div>
  );
};
