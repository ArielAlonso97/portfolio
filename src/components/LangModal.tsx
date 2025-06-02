import React from "react";
import LanguageButton from "./LanguageButton";

const LangModal = () => {
  return (
    <div className="fixed top-0 left-0 z-[100] bg-[rgba(1,1,1,.6)] h-screen w-screen flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-[500px] rounded-2xl py-2">
        <h2 className="text-center text-2xl font-bold">Select a language</h2>
        <LanguageButton></LanguageButton>
      </div>
    </div>
  );
};

export default LangModal;
