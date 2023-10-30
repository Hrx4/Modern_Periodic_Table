import React, { useState, useContext } from "react";
import { NeuclearProperties } from "@/types/ElementTypes";
import { MdContentCopy, MdCheck } from "react-icons/md";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import DOMPurify from "dompurify";

const NeuclearProperty = ({
  radioactive,
  half_life,
  lifetime,
  neutron_cross_section,
  decay_mode,
}: NeuclearProperties) => {
  const [isCopying, setIsCopying] = useState({
    radioactive: false,
    half_life: false,
    lifetime: false,
    neutron_cross_section: false,
    decay_mode: false,
  });
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const handleCopy = (value: string, property: string) => {
    setIsCopying({ ...isCopying, [property]: true });
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setIsCopying({ ...isCopying, [property]: false });
    }, 500);
  };
  return (
    <div
      className={`w-full flex flex-col justify-start items-start p-4 ${
        theme === "dark"
          ? "text-text_primary bg-bg_dark"
          : "bg-bg_light text-text_secondary"
      } shadow-md rounded-sm`}
    >
      <h1 className="text-xl">Neuclear Properties</h1>
      <div className="flex flex-col w-full justify-start items-start">
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">Radioactive</p>
          <div
            className={`w-[70%] border ${
              theme === "dark" ? "border-text_primary" : "border-text_secondary"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p>{radioactive}</p>
            <button
              onClick={() => handleCopy(radioactive.toString(), "radioactive")}
            >
              {!isCopying.radioactive ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">Half Life(s)</p>
          <div
            className={`w-[70%] border ${
              theme === "dark" ? "border-text_primary" : "border-text_secondary"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(half_life),
              }}
            ></p>
            <button
              onClick={() => handleCopy(half_life.toString(), "half_life")}
            >
              {!isCopying.half_life ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">Lifetime(s)</p>
          <div
            className={`w-[70%] border ${
              theme === "dark" ? "border-text_primary" : "border-text_secondary"
            } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
          >
            <p
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(lifetime) }}
            ></p>
            <button onClick={() => handleCopy(lifetime.toString(), "lifetime")}>
              {!isCopying.lifetime ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-700" />
              )}
            </button>
          </div>
        </div>
        {neutron_cross_section && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">
              Neutron Cross Section
            </p>
            <div
              className={`w-[70%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{neutron_cross_section}</p>
              <button
                onClick={() =>
                  handleCopy(
                    neutron_cross_section.toString(),
                    "neutron_cross_section"
                  )
                }
              >
                {!isCopying.neutron_cross_section ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
        {decay_mode && (
          <div className="flex flex-row justify-start items-center w-full mt-3">
            <p className="mr-5 pr-2 py-1 rounded-[4px] w-[30%]">Decay Mode</p>
            <div
              className={`w-[70%] border ${
                theme === "dark"
                  ? "border-text_primary"
                  : "border-text_secondary"
              } px-2 py-1 rounded-[4px] flex justify-between items-center select-none`}
            >
              <p>{decay_mode}</p>
              <button onClick={() => handleCopy(decay_mode, "decay_mode")}>
                {!isCopying.decay_mode ? (
                  <MdContentCopy />
                ) : (
                  <MdCheck className="text-green-700" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NeuclearProperty;
