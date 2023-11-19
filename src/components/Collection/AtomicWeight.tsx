import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import React, { useContext } from "react";
import Link from "next/link";

interface AtomicWeight {
  atomic_number: number;
  symbol: string;
  name: string;
  atomic_weight: number;
}

const AtomicWeight = ({
  atomic_number,
  atomic_weight,
  symbol,
  name,
}: AtomicWeight) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="gap-1.5 grid text-center grid-cols-[12%_12%_35%_35%]">
      <Link
        href={`/elements/${atomic_number}`}
        className={`p-2 rounded-sm shadow-md ${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        }`}
      >
        {atomic_number}
      </Link>
      <Link
        href={`/elements/${atomic_number}`}
        className={`p-2 rounded-sm shadow-md ${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        }`}
      >
        {symbol}
      </Link>
      <Link
        href={`/elements/${atomic_number}`}
        className={`p-2 rounded-sm shadow-md ${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        }`}
      >
        {name}
      </Link>
      <Link
        href={`/elements/${atomic_number}`}
        className={`p-2 rounded-sm shadow-md ${
          theme === "dark"
            ? "bg-bg_dark text-text_primary"
            : "bg-bg_light text-text_secondary"
        }`}
      >
        {atomic_weight}
      </Link>
    </div>
  );
};

export default AtomicWeight;
