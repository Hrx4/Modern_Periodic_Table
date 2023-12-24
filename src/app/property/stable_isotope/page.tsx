"use client";
import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import { StableIsotopes } from "@/components/Collection";
import { ActinideElem } from "@/constant/ElementDetails/ActinideElem";
import { LanthanideElem } from "@/constant/ElementDetails/LanthanideElem";
import { RowFiveElem } from "@/constant/ElementDetails/RowFiveElem";
import { RowFourElem } from "@/constant/ElementDetails/RowFourElem";
import { RowThreeElem } from "@/constant/ElementDetails/RowThreeElem";
import { RowTwoElem } from "@/constant/ElementDetails/RowTwoElem";
import { RowOneElem } from "@/constant/ElementDetails/RowOneElem";
import { RowSixElem } from "@/constant/ElementDetails/RowSixElem";
import { RowSevenElem } from "@/constant/ElementDetails/RowSevenElem";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import DynamicParticle from "@/components/DynamicParticle";

const Page = () => {
  if (typeof window !== "undefined") {
    window.document.title = `Atomic Weight of Elements`;
  }
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div
      className={`min-h-screen w-full flex flex-col justify-start items-center gap-2 ${
        theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
      } justify-start items-center`}
    >
      <div className="absolute w-full min-h-screen">
        <DynamicParticle />
      </div>
      <Navbar />
      <div
        className={`w-full text-4xl flex justify-center items-center font-satisfy p-2 ${
          theme === "dark" ? " text-text_primary" : " text-text_secondary"
        } z-[5]`}
      >
        Stable Isotopes
      </div>
      <div
        className={`w-[98%] grid grid-cols-1 pb-3 overflow-y-scroll gap-5 z-[5]`}
      >
        {RowOneElem.map((e) => {
          return (
            e.neuclear_properties && (
              <StableIsotopes
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                stable={e.neuclear_properties.stable}
              />
            )
          );
        })}
        {RowTwoElem.map((e) => {
          return (
            e.neuclear_properties && (
              <StableIsotopes
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                stable={e.neuclear_properties.stable}
              />
            )
          );
        })}
        {RowThreeElem.map((e) => {
          return (
            e.neuclear_properties && (
              <StableIsotopes
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                stable={e.neuclear_properties.stable}
              />
            )
          );
        })}
        {RowFourElem.map((e) => {
          return (
            e.neuclear_properties && (
              <StableIsotopes
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                stable={e.neuclear_properties.stable}
              />
            )
          );
        })}
        {RowFiveElem.map((e) => {
          return (
            e.neuclear_properties && (
              <StableIsotopes
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                stable={e.neuclear_properties.stable}
              />
            )
          );
        })}
        {RowSixElem[0].neuclear_properties && (
          <StableIsotopes
            name={RowSixElem[0].general_properties.name}
            atomic_number={RowSixElem[0].general_properties.atomic_number}
            symbol={RowSixElem[0].general_properties.symbol}
            stable={RowSixElem[0].neuclear_properties.stable}
          />
        )}
        {RowSixElem[1].neuclear_properties && (
          <StableIsotopes
            name={RowSixElem[1].general_properties.name}
            atomic_number={RowSixElem[1].general_properties.atomic_number}
            symbol={RowSixElem[1].general_properties.symbol}
            stable={RowSixElem[1].neuclear_properties.stable}
          />
        )}
        {LanthanideElem.map((e) => {
          return (
            e.neuclear_properties && (
              <StableIsotopes
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                stable={e.neuclear_properties.stable}
              />
            )
          );
        })}
        {RowSixElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.neuclear_properties && (
              <StableIsotopes
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                stable={e.neuclear_properties.stable}
              />
            )
          );
        })}
        {RowSevenElem[0].neuclear_properties && (
          <StableIsotopes
            name={RowSevenElem[0].general_properties.name}
            atomic_number={RowSevenElem[0].general_properties.atomic_number}
            symbol={RowSevenElem[0].general_properties.symbol}
            stable={RowSevenElem[0].neuclear_properties.stable}
          />
        )}
        {RowSevenElem[1].neuclear_properties && (
          <StableIsotopes
            name={RowSevenElem[1].general_properties.name}
            atomic_number={RowSevenElem[1].general_properties.atomic_number}
            symbol={RowSevenElem[1].general_properties.symbol}
            stable={RowSevenElem[1].neuclear_properties.stable}
          />
        )}
        {ActinideElem.map((e) => {
          return (
            e.neuclear_properties && (
              <StableIsotopes
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                stable={e.neuclear_properties.stable}
              />
            )
          );
        })}
        {RowSevenElem.map((e, ind) => {
          return (
            ind > 1 &&
            e.neuclear_properties && (
              <StableIsotopes
                key={e.general_properties.name}
                name={e.general_properties.name}
                atomic_number={e.general_properties.atomic_number}
                symbol={e.general_properties.symbol}
                stable={e.neuclear_properties.stable}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Page;
