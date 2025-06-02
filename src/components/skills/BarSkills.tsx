import React, { useEffect, useRef, useState } from "react";

const BarSkills = ({
  percentage,
  divWidth,
}: {
  percentage: number;
  divWidth: number;
}) => {
  useEffect(() => {
    console.log(divWidth);
    let convertedWidth = (divWidth * percentage) / 100;
    setwidth(convertedWidth);
  }, [divWidth]);

  const [width, setwidth] = useState(0);
  return (
    <div
      className={`bg-white h-2 transition-all duration-500`}
      style={{ width: width }}
    ></div>
  );
};

export default BarSkills;
