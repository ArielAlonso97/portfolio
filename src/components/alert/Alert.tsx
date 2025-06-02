import { useAlert } from "@/context/AlertContext";
import React from "react";

const Alert = () => {
  const { alert, createAlert } = useAlert();
  return (
    <>
      {alert && (
        <span
          className={` fixed bottom-0 w-full left-0 flex justify-center`}
        >
            <p className={`${
            alert.type == "error"
              ? "bg-red-500 text-white"
              : "text-black bg-green-400"
          } w-fit py-2 px-4 rounded-t-2xl`}> {alert.text} <button onClick={e=>createAlert("")}>X</button></p>

        </span>
      )}
    </>
  );
};

export default Alert;
