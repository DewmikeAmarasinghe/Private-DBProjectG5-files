import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-md",
  square: "rounded-none",
};

const variants = {
  fill: {
    gray_50: "bg-gray-50 text-gray-700",
    gray_50_0a: "bg-gray-50_0a text-gray-700",
  },
  outline: {
    black_900_7f: "border-black-900_7f border border-solid text-blue-gray-200",
  },
};

const sizes = {
  sm: "h-[50px] px-4 text-[16px]",
  xs: "h-[44px] px-4 text-[14px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      variant = "fill",
      size = "xs",
      color = "gray_50",
      error = "",
      ...restProps
    },
    ref
  ) => {
    return (
      <div className="flex flex-col w-full ">
        {label && (
          <label
            htmlFor={name}
            className="mb-2 text-sm font-medium text-gray-700 "
          >
            {label}
          </label>
        )}
        <div
          className={`relative flex items-center border-none ${shapes[shape]} ${variants[variant][color]} ${sizes[size]}`}
        >
          {prefix && <span className="absolute left-3">{prefix}</span>}
          <input
            ref={ref}
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={onChange}
            className={`${className} w-full h-full px-4 bg-transparent focus:outline-none ${
              prefix ? "pl-10" : ""
            } ${suffix ? "pr-10" : ""}`}
            {...restProps}
          />
          {suffix && <span className="absolute right-3">{suffix}</span>}
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_50", "gray_50_0a", "black_900_7f"]),
  error: PropTypes.string,
};

export { Input };
