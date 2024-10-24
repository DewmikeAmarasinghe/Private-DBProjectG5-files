import React from "react";

const sizes = {
  texts: "text-[16px] font-medium",
  textmd: "text-[18px] font-medium",
  textlg: "text-[20px] font-medium",
  textxl: "text-[24px] font-medium md:text-[22px]",
  text2xl: "text-[32px] font-medium md:text-[30px] sm:text-[28px]",
  text3xl: "text-[40px] font-medium md:text-[38px] sm:text-[36px]",
  headingxs: "text-[10px] font-semibold",
  headings: "text-[14px] font-semibold",
  headingmd: "text-[16px] font-semibold",
  headinglg: "text-[24px] font-extrabold md:text-[22px]",
  headingxl: "text-[32px] font-bold md:text-[30px] sm:text-[28px]",
};

const Heading = ({
  children,
  className = "",
  size = "texts",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-gray-900 font-sora ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
