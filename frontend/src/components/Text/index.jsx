import React from "react";

const sizes = {
  textxs: "text-[0.88rem] font-normal not-italic",
  texts: "text-[1.00rem] font-normal",
};

const Text = ({ children, className = "", as, size = "texts", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_01 font-sora ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
