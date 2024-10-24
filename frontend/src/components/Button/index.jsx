import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[20px]",
};

const variants = {
  gradient: {
    blue_A200_cyan_A700: "bg-gradient text-white-a700",
  },
  fill: {
    white_A700: "bg-white-a700 text-gray-900",
  },
};

const sizes = {
  sm: "h-[48px] px-[34px] text-[16px]",
  md: "h-[60px] px-[34px] text-[16px]",
  xs: "h-[44px] px-5 text-[14px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variants[variant][color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  size: PropTypes.oneOf(["sm", "md", "xs"]),
  color: PropTypes.oneOf(["blue_A200_cyan_A700", "white_A700"]),
};

export { Button };